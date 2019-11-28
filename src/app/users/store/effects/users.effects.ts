import { Injectable } from "@angular/core";
import { UserService } from '../../services/user.service';
import { IUsersState } from '../states/users.state';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as UsersActions from '../actions/users.actions';


@Injectable()
export class UsersEffects {

    constructor(
        private _userService: UserService,
        private _actions$: Actions
    ) { }

    getUsers$ = createEffect(() => this._actions$.pipe(
        ofType(UsersActions.getUsers),
        switchMap(() =>
            this._userService.loadUsers().pipe(
                map(users => UsersActions.getUsersSuccess({ users })),
                // catchError(error => of(UsersActions.getUsersFailure({ error }))))
            )
        )
    ));

}
