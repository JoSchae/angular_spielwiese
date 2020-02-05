import { initialAuthenticationState, IAuthenticationState } from '../state/authentication.state';
import * as AuthenticationActions from '../actions/authentication.actions';
import { createReducer, on, Action } from '@ngrx/store';

const authenticationReducerInternal = createReducer(
    initialAuthenticationState,
    on(
        AuthenticationActions.getAuthenticationSuccess, (state, { payload: authentication }) => ({
            ...state,
            token: authentication.token,
            isLoggedIn: authentication.isLoggedIn
        })
    ),
    on(
        AuthenticationActions.getAuthenticationFailure, (state, action) => ({
            ...state,
            // error: action.payload
        })
    ),
    on(
        AuthenticationActions.logout, (state) => ({
            ...state,
            token: null,
            isLoggedIn: false
        })
    )
);

export function authenticationReducer(
    state: IAuthenticationState | undefined,
    action: Action
) {
    return authenticationReducerInternal(state, action);
}
