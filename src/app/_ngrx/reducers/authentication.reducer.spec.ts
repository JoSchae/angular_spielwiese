import { authenticationReducer } from "./authentication.reducer";
import { initialAuthenticationState } from '../state/authentication.state';
import * as authenticationActions from '../actions/authentication.actions';

const authenticationState = {
    token: 'my-awesome-token',
    isLoggedIn: true
};

describe('authentication reducer', () => {

    it('should return default state', () => {
        const action = { type: 'NOOP' } as any;
        const result = authenticationReducer(undefined, action);
        expect(result).toEqual(initialAuthenticationState);
    });

    it('should return new state with token', () => {
        const resultState = {
            token: 'my-awesome-token',
            isLoggedIn: true
        };
        const action = authenticationActions.getAuthenticationSuccess({payload: authenticationState});
        const result = authenticationReducer(initialAuthenticationState, action);
        expect(result).toEqual(resultState);
    });

    it('should return new state with no token', () => {
        const resultState = {
            token: null,
            isLoggedIn: false
        };
        const action = authenticationActions.logout();
        const result = authenticationReducer(authenticationState, action);
        expect(result).toEqual(resultState);
    });

});
