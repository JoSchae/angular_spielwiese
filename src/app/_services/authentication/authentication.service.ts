import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuthenticationHttp } from 'src/app/_models/http/authentication-http.interface';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private _authUrl = `${environment.proxyApiUrl}/${environment.authenticationEndpoint}`;

    private _isLoggedIn$: Subject<boolean>;
    public isLoggedIn: Observable<boolean>;

    constructor(private _http: HttpClient) {
        this._isLoggedIn$ = new Subject<boolean>();
        this.isLoggedIn  = this._isLoggedIn$.asObservable();
    }

    getBearerToken() {
        console.log('http call')
        return this._http.get<IAuthenticationHttp>(this._authUrl);
    }

    setBearerToken(bearerToken: string) {
        console.log('setting bearer token')
        localStorage.setItem('bearerToken', bearerToken);
    }

    setIsLoggedIn(isLoggedIn: boolean) {
        console.log('returning login')
        this._isLoggedIn$.next(isLoggedIn);
        return isLoggedIn;
    }


}
