import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { IAuthenticationState } from 'src/app/_ngrx/state/authentication.state';
import { AuthenticationFacade } from 'src/app/_facades/authentication/authentication.facade';

@Component({
    selector: 'tmp-login-ngrx',
    template: '<tmp-login-ngrx-view [isLoggedIn]="(authState | async).isLoggedIn" (buttonEmitter)="onOutputRecived($event)"></tmp-login-ngrx-view>'
})
export class LoginNGRXComponent {

    public authState: Observable<IAuthenticationState>;

    constructor(private _authenticationFacade: AuthenticationFacade) {
        this.authState = this._authenticationFacade.authenticationNGRXState;
    }

    public onOutputRecived(event: string) {
        if (event === 'login') {
            this._authenticationFacade.loginNGRX();
        } else {
            this._authenticationFacade.logoutNGRX();
        }
    }
}

