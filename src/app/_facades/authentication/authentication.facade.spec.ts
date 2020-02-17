import { AuthenticationFacade } from './authentication.facade';
import { SpyObject } from '@ngneat/spectator';
import { SpectatorHttp, createHttpFactory, mockProvider } from '@ngneat/spectator/jest';
import { AuthenticationStore, IAuthenticationState } from '../../_stores/authentication/auth.store.service';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('Authentication Facade', () => {

    const response = {
        token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983'
    };
    const initialState = {
        token: null,
        isLoggedIn: false
    };
    const newState = {
        token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983',
        isLoggedIn: true
    };

    let spectator: SpectatorHttp<AuthenticationFacade>;
    const createService = createHttpFactory({
        service: AuthenticationFacade,
        providers: [
            mockProvider(AuthenticationStore, {
                authenticationState$: of(initialState),
                setAuthenticationState: jest.fn()
            }),
            mockProvider(AuthenticationService, {
                getToken: jest.fn(() => of(response))
            })
        ],
    });

    beforeEach(() => {
        spectator = createService();
    });

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should call service.login()', () => {
        spectator.service.login();
        const spyOnGetToken = jest.spyOn(
            spectator.get(AuthenticationService), 'getToken'
        );
        const spyOnSetAuthenticationState = jest.spyOn(
            spectator.get(AuthenticationStore), 'setAuthenticationState'
        );
        expect(spyOnGetToken).toHaveBeenCalled();
        expect(spyOnSetAuthenticationState).toHaveBeenCalledWith(newState);
    });

    it('should call service.logout()', () => {
        spectator.service.logout();
        const spyOnSetAuthenticationState = jest.spyOn(
            spectator.get(AuthenticationStore), 'setAuthenticationState'
        );
        expect(spyOnSetAuthenticationState).toHaveBeenCalledWith(initialState);
    });

});
