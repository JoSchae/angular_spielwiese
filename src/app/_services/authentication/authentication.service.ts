import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuthenticationHttp } from 'src/app/_models/authentication.interface';
import { Observable, throwError } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IAuthentication } from 'src/app/_models/authentication.interface';
import { AuthenticationStore, IAuthenticationState } from 'src/app/_store/authentication/auth.store.service';
import { isCorrectToken } from 'src/app/_core-functions/core-functions';
import { FacadesModule } from 'src/app/_facades/facades.module';

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

    login() {
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

    logout() {
        console.log('LOGOUT');
        const state = {
            token: null,
            isLoggedIn: false
        }  as IAuthenticationState;
        this._authenticationStore.setAuthenticationState(state);
    }

}
