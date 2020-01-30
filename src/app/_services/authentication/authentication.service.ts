import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthenticationStore, IAuthenticationState } from '../../_stores/authentication/auth.store.service';
import { IAuthentication, IAuthenticationHttp } from '../../_models/authentication.interface';
import { isCorrectTokenPattern } from '../../_core-functions/core-functions';


@Injectable()
export class AuthenticationService {

    private _authUrl = `${environment.apiUrl}/${environment.authenticationEndpoint}`;

    constructor(private _http: HttpClient) { }

    public getToken(): Observable<IAuthentication> {
        return this._http.get<IAuthenticationHttp>(this._authUrl).pipe(
            map(response => {
                if (isCorrectTokenPattern(response.authentication.token)) {
                    return response.authentication;
                } else {
                    throwError(new Error('No correct token in response'));
                }
            }),
            take(1),
        );
    }
}
