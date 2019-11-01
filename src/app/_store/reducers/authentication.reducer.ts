import { initialAuthenticationState, IAuthenticationState } from '../state/authentication.state';
import * as AuthenticationActions from '../actions/authentication.actions';
import { createReducer, on, Action } from '@ngrx/store';

const authenticationReducerInternal = createReducer(
    initialAuthenticationState,
    on(
        AuthenticationActions.getAuthenticationSuccess, (state, { payload }) => ({
            ...state,
            authentication: payload
        })
    )
);

export function authenticationReducer(
    state: IAuthenticationState | undefined,
    action: Action
) {
    return authenticationReducerInternal(state, action);
}
