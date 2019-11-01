import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { GetAuthentication, EAuthenticationActions, GetAuthenticationSuccess } from '../actions/authentication.actions';
import { CookieService } from 'ngx-cookie-service';
import { tap, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { IAuthenticationHttp } from 'src/app/_models/http/authentication-http.interface';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private _authenticationService: AuthenticationService,
        private _store: Store<IAppState>,
        private _actions$: Actions,
        private _cookieService: CookieService
    ) { }

    @Effect()
    getAuthentication$ = this._actions$.pipe(
        ofType<GetAuthentication>(EAuthenticationActions.GetAuthentication),
        switchMap<GetAuthentication, Observable<IAuthenticationHttp>>(_ => this._authenticationService.getToken().pipe(
            tap(authenticationHttp => {
                if (authenticationHttp.authentication.token) {
                    this._cookieService.set('my-token-cookie', authenticationHttp.authentication.token);
                }
            })
        )),
        switchMap(authenticationHttp => of(new GetAuthenticationSuccess(authenticationHttp.authentication))
        )
    );
}

