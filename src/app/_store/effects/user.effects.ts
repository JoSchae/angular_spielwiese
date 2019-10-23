import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { EUserActions, GetUser, GetUsersSuccess, GetUserSuccess, GetUsers } from '../actions/user.actions';
import { IAppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { UsersService } from 'src/app/_services/users/users.service';
import { IUserHttp } from 'src/app/_models/http/user-http.interface';
import { selectUserList } from '../selectors/user.selector';
//import all requried services or any dependencies

@Injectable()
export class UserEffects {

    constructor(
        private _store: Store<IAppState>,
        private _actions$: Actions,
        private _userService: UsersService
        ) { }

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));

        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    );
}
