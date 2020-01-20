import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationStore, IAuthenticationState } from '../_store/authentication/auth.store.service';
import { IAuthentication } from '../_models/authentication.interface';
import { Observable, interval } from 'rxjs';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { AuthenticationFacade } from '../_facades/authentication.facade';

@Component({
    selector: 'tmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public authentication: Observable<IAuthenticationState> = this._authFacade.authentiationState$;

    constructor(
        private _authFacade: AuthenticationFacade
    ) { }

    ngOnInit() { }

    login() {
        this._authFacade.login();
    }

    logout() {
        this._authFacade.logout();
    }

}
