import { Injectable } from "@angular/core";
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetAuthentication, EAuthenticationActions, GetAuthenticationSuccess, GetIsLoggedIn, GetIsLoggedInSuccess } from '../actions/authentication.actions';
import { switchMap, concatMap, withLatestFrom, map, tap, concat, mapTo } from 'rxjs/operators';
import { IAuthentication } from 'src/app/_models/authentication.interface';
import { of } from 'rxjs';
import { IAuthenticationHttp } from 'src/app/_models/http/authentication-http.interface';
import { IAppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { selectSelectedAuthentication } from '../selectors/authentication.selector';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private _authenticationService: AuthenticationService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }

    @Effect()
    getAuthentication$ = this._actions$.pipe(
        ofType<GetAuthentication>(EAuthenticationActions.GetAuthentication),
        concatMap(action => this._authenticationService.getBearerToken().pipe(
            tap<IAuthenticationHttp>(authenticationHttp => new GetAuthenticationSuccess(
                authenticationHttp.authentication
            )
            )
        )
        )
    );

    @Effect()
    getIsLoggedIn$ = this._actions$.pipe(
        ofType<GetIsLoggedIn>(EAuthenticationActions.GetIsLoggedIn),
        map(action => action.payload),
        tap(bearerToken => this._authenticationService.setBearerToken(bearerToken)),
        concatMap(() => of(this._authenticationService.setIsLoggedIn(true))),
        switchMap(loggedIn => {
            if (loggedIn) {
                return of(new GetIsLoggedInSuccess(loggedIn));
            }
        })
    );
}
