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
                authentication: action.payload
            };
        }
        case EAuthenticationActions.GetIsLoggedInSuccess: {
            return {
                ...state,
                authentication: { jwtToken: state.authentication.jwtToken, isLoggedIn: action.payload }
            };
        }
    }
}
