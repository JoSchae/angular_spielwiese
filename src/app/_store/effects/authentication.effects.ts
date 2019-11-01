import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { CookieService } from 'ngx-cookie-service';
import * as authenticationActions from '../actions/authentication.actions';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private _authenticationService: AuthenticationService,
        private _store: Store<IAppState>,
        private _actions$: Actions,
        private _cookieService: CookieService
    ) { }

    getAuthentication$ = createEffect(() => this._actions$.pipe(
        ofType(authenticationActions.getAuthentication),
        switchMap(action => this._authenticationService.getToken().pipe(
            tap(authenticationHttp => {
                if (authenticationHttp.authentication.token) {
                    this._cookieService.set('my-token-cookie', authenticationHttp.authentication.token);
                }
            }),
            map(authenticationHttp => authenticationActions.getAuthenticationSuccess({ payload: authenticationHttp.authentication })),
            catchError(err => of(err))
            )
        ))
    );
}

