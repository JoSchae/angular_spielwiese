import { createReducer, on, Action } from "@ngrx/store";
import { initialUsersState, IUsersState } from '../states/users.state';
import * as UsersActions from '../actions/users.actions';

const usersReducerInternal = createReducer(
    initialUsersState,
    on(
        UsersActions.getUsersSuccess, (state, { users }) => ({
            ...state,
            users
        })
    )
);

export function usersReducer(
    state: IUsersState | undefined,
    action: Action
) {
    return usersReducerInternal(state, action);
}
