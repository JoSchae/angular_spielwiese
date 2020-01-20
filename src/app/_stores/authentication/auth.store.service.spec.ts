import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest/';
import { AuthenticationStore } from './auth.store.service';
import { marbles } from 'rxjs-marbles/jest';

describe('Authentication Store', () => {

    const initialState = {
        token: null,
        isLoggedIn: false
    };
    const newState = {
        token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983',
        isLoggedIn: true
    };

    let spectator: SpectatorService<AuthenticationStore>;
    const createService = createServiceFactory({
        service: AuthenticationStore
    });

    beforeEach(() =>
        spectator = createService()
    );

    it('should have an initial State', marbles(m => {
        const source = spectator.service.authenticationState$;
        const expected = m.cold('a', { a: initialState });
        m.expect(source).toBeObservable(expected);
    }));

    it('should revice new States when setAuthenticationState is called', marbles(m => {
        spectator.service.setAuthenticationState(newState);
        const source = spectator.service.authenticationState$;
        const expected = m.cold('a', { a: newState });
        m.expect(source).toBeObservable(expected);
    }));

});
