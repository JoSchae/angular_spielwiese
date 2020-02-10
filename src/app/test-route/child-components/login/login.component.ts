import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { IAuthenticationState } from '../../../_stores/authentication/auth.store.service';
import { AuthenticationFacade } from '../../../_facades/authentication/authentication.facade';

@Component({
    selector: 'tmp-login',
    template: '<tmp-login-view [isLoggedIn]="(authState | async).isLoggedIn" (buttonEmitter)="onOutputRecived($event)"></tmp-login-view>',
})
export class LoginComponent {

    public authState: Observable<IAuthenticationState>;

    constructor(private _authenticationFacade: AuthenticationFacade) {
        this.authState = this._authenticationFacade.authenticationState$;
    }

    public onOutputRecived(event: string) {
        if (event === 'login') {
            this._authenticationFacade.login();
        } else {
            this._authenticationFacade.logout();
        }
    }

}
