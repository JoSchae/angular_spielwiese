import { Injectable } from '@angular/core';
import { AuthenticationStore } from '../../_stores/authentication/auth.store.service';
import { AuthenticationService } from '../../_services/authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationFacade {

    public readonly authenticationState$ = this._store.authenticationState$;

    constructor(
        private _store: AuthenticationStore,
        private _service: AuthenticationService
    ) { }

    public login() {
        this._service.login();
    }

    public logout() {
        this._service.logout();
    }
}
