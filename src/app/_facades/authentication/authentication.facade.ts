import { Injectable } from '@angular/core';
import { AuthenticationStore, IAuthenticationState } from '../../_stores/authentication/auth.store.service';
import { AuthenticationService } from '../../_services/authentication/authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationFacade {

    /**
     * Authentication State Observable
     */
    public readonly authenticationState$ = this._store.authenticationState$;

    constructor(
        private _store: AuthenticationStore,
        private _service: AuthenticationService,
    ) { }

    /**
     * Logs the user in
     */
    public login() {
        this._service.getToken().subscribe(
            authentication => {
                console.log('LOGIN');
                const state = {
                    token: authentication.token,
                    isLoggedIn: true
                } as IAuthenticationState;
                this._store.setAuthenticationState(state);
            },
        );
    }

    /**
     * Logs the user out
     */
    public logout() {
        console.log('LOGOUT');
        const state = {
            token: null,
            isLoggedIn: false
        } as IAuthenticationState;
        this._store.setAuthenticationState(state);
    }

}
