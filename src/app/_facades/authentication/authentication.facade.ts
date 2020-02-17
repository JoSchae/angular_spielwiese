import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { Store, select } from '@ngrx/store';
import { getAuthentication, logout } from 'src/app/_ngrx/actions/authentication.actions';
import { selectAuthentication } from 'src/app/_ngrx/selectors/authentication.selectors';
import { IAuthenticationState } from 'src/app/_ngrx/state/authentication.state';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationFacade {

    /**
     * Authentication State Observable
     */
    public readonly authenticationNGRXState = this._ngrx.pipe(select(selectAuthentication));

    constructor(
        private _service: AuthenticationService,
        private _ngrx: Store<IAuthenticationState>
    ) { }

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
