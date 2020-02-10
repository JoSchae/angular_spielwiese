import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import * as authenticationActions from '../actions/authentication.actions';
import { switchMap, map } from 'rxjs/operators';
import { IAuthenticationState } from '../state/authentication.state';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private _authenticationService: AuthenticationService,
        private _actions$: Actions,
    ) { }

    getAuthentication$ = createEffect(() => this._actions$.pipe(
        ofType(authenticationActions.getAuthentication),
        switchMap(action => this._authenticationService.getToken()/** TODO */.pipe(
            map(authentication => {
                const successfulLoginState = {
                    token: authentication.token,
                    isLoggedIn: true
                } as IAuthenticationState;
                return authenticationActions.getAuthenticationSuccess({ payload: successfulLoginState });
            })
        )))
    );
}

