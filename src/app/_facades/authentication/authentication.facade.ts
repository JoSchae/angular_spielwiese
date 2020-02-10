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

    public readonly authenticationState$ = this._store.authenticationState$;
    public readonly authenticationNGRXState = this._ngrx.pipe(select(selectAuthentication));

    constructor(
        private _store: AuthenticationStore,
        private _service: AuthenticationService,
        private _ngrx: Store<IAuthenticationState>
    ) { }

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

    public logout() {
        console.log('LOGOUT');
        const state = {
            token: null,
            isLoggedIn: false
        } as IAuthenticationState;
        this._store.setAuthenticationState(state);
    }

    public loginNGRX() {
        this._ngrx.dispatch(getAuthentication());
    }

    public logoutNGRX() {
        this._ngrx.dispatch(logout());
    }
}
