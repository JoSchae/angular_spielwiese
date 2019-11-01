import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuthenticationHttp } from 'src/app/_models/http/authentication-http.interface';
import { Subject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private _authUrl = `${environment.apiUrl}/${environment.authenticationEndpoint}`;

    private _isLoggedIn$: Subject<boolean>;
    public isLoggedIn: Observable<boolean>;

    constructor(private _http: HttpClient) {
        this._isLoggedIn$ = new Subject<boolean>();
        this.isLoggedIn  = this._isLoggedIn$.asObservable();
    }

    getToken() {
        return this._http.get<IAuthenticationHttp>(this._authUrl).pipe(
            map<any, IAuthenticationHttp>(authentication => ({ authentication }))
        );
    }

}
