import { initialAuthenticationState, IAuthenticationState } from '../state/authentication.state';
import { AuthenticationActions, EAuthenticationActions } from '../actions/authentication.actions';

export const authenticationReducers = (
    state = initialAuthenticationState,
    action: AuthenticationActions
): IAuthenticationState => {
    switch (action.type) {
        case EAuthenticationActions.GetAuthenticationSuccess: {
            return {
                ...state,
                token: action.payload.token,
                isLoggedIn: true
            };
        }
        default: {
            return state;
        }
    }
}
