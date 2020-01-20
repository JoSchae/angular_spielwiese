import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthenticationStore, IAuthenticationState } from '../../_stores/authentication/auth.store.service';
import { IAuthentication, IAuthenticationHttp } from '../../_models/authentication.interface';
import { isCorrectToken } from '../../_core-functions/core-functions';


@Injectable()
export class AuthenticationService {

    private _authUrl = `${environment.apiUrl}/${environment.authenticationEndpoint}`;

    constructor(
        private _http: HttpClient,
        private _authenticationStore: AuthenticationStore,
        ) { }

    private getToken(): Observable<IAuthentication> {
        return this._http.get<IAuthenticationHttp>(this._authUrl).pipe(
            map(response => {
                if (isCorrectToken(response.authentication.token)) {
                    return response.authentication;
                } else {
                    throwError(new Error('No correct token in response'));
                }
            }),
            take(1),
        );
    }

    public login() {
        console.log('LOGIN');
        this.getToken().subscribe(
            authentication => {
                const state = {
                    token: authentication.token,
                    isLoggedIn: true
                } as IAuthenticationState;
                this._authenticationStore.setAuthenticationState(state);
            },
            err => console.error('Error! ', err)
        );
    }

    public logout() {
        console.log('LOGOUT');
        const state = {
            token: null,
            isLoggedIn: false
        }  as IAuthenticationState;
        this._authenticationStore.setAuthenticationState(state);
    }

}
