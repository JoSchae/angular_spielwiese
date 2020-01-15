import { Injectable } from "@angular/core";
import { AuthenticationStore, IAuthenticationState } from '../_store/authentication/auth.store.service';
import { AuthenticationService } from '../_services/authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationFacade {

    public readonly authentiationState$ = this._store.authentiationState$;

    constructor(
        private _store: AuthenticationStore,
        private _service: AuthenticationService
    ) { }

    // public setAuthenticationState(auth: IAuthenticationState) {
    //     this._store.setAuthenticationState(auth);
    // }

    public login() {
        this._service.login();
    }

    public logout() {
        this._service.logout();
    }
}
