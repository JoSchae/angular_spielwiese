import { Injectable } from '@angular/core';
import { AuthenticationStore, IAuthenticationState } from '../../_stores/authentication/auth.store.service';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { Store, select } from '@ngrx/store';
import { getAuthentication, logout } from 'src/app/_ngrx/actions/authentication.actions';
import { selectAuthentication } from 'src/app/_ngrx/selectors/authentication.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationFacade {

    /**
     * Authentication State Observable
     */
    public readonly authenticationState$ = this._store.authenticationState$;
    /**
     * Authentication State Observable
     */
    public readonly authenticationNGRXState = this._ngrx.pipe(select(selectAuthentication));

    constructor(
        private _store: AuthenticationStore,
        private _service: AuthenticationService,
        private _ngrx: Store<IAuthenticationState>
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

    /**
     * Logs the user in
     */
    public loginNGRX() {
        this._ngrx.dispatch(getAuthentication());
    }

    /**
     * Logs the user out
     */
    public logoutNGRX() {
        this._ngrx.dispatch(logout());
    }
}
