import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import * as authenticationActions from '../actions/authentication.actions';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { mapError } from 'src/app/_core-functions/core-functions';
import { IAuthenticationState } from '../state/authentication.state';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private _authenticationService: AuthenticationService,
        private _store: Store<IAppState>,
        private _actions$: Actions,
    ) { }

    getAuthentication$ = createEffect(() => this._actions$.pipe(
        ofType(authenticationActions.getAuthentication),
        switchMap(action => this._authenticationService.getToken()/** TODO */.pipe(
            // tap(authentication => {
            //     if (authentication.token) {
            //         this._cookieService.set('my-token-cookie', authentication.token);
            //     }
            // }),
            map(authentication => {
                const successfulLoginState = {
                    token: authentication.token,
                    isLoggedIn: true
                } as IAuthenticationState;
                return authenticationActions.getAuthenticationSuccess({ payload: successfulLoginState });
        }),
            // catchError((err: Error) => of(err).pipe(
            //     map(unmappedError => mapError(unmappedError)),
            //     map(mappedError => authenticationActions.getAuthenticationFailure({ payload: mappedError }))
            // ))

        )))
    );
}

