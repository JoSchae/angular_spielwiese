import { initialAuthenticationState, IAuthenticationState } from '../state/authentication.state';
import * as AuthenticationActions from '../actions/authentication.actions';
import { createReducer, on, Action } from '@ngrx/store';

const authenticationReducerInternal = createReducer(
    initialAuthenticationState,
    on(
        AuthenticationActions.getAuthenticationSuccess, (state, { payload: authentication }) => ({
            ...state,
            authentication
        })
    ),
    on(
        AuthenticationActions.getAuthenticationFailure, (state, action) => ({
            ...state,
            error: action.payload
        })
    )
);

export function authenticationReducer(
    state: IAuthenticationState | undefined,
    action: Action
) {
    return authenticationReducerInternal(state, action);
}
