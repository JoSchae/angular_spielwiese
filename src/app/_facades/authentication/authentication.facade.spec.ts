import { AuthenticationFacade } from './authentication.facade';
import { SpyObject } from '@ngneat/spectator';
import { SpectatorHttp, createHttpFactory } from '@ngneat/spectator/jest';
import { AuthenticationStore, IAuthenticationState } from '../../_stores/authentication/auth.store.service';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialAppState } from '../../_ngrx/state/app.state';

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
    let login: jest.Mock<void, []>;
    let logout: jest.Mock<void, []>;
    const createService = createHttpFactory({
        service: AuthenticationFacade,
        providers: [
            {
                provide: AuthenticationStore,
                useValue: {
                    authenticationState$: of(initialState),
                    setAuthenticationState: jest.fn()
                }
            },
            {
                provide: AuthenticationService,
                useValue: {
                    getToken: jest.fn(() => of(response))
                }
                // useValue: {
                //     login: jest.fn(),
                //     logout: jest.fn()
                // }
            },
            // {
            //     provide: Store,
            //     useValue: {
            //         dispatch: jest.fn(),
            //         pipe: jest.fn()
            //     }
            // }
            provideMockStore({ initialState: initialAppState })
        ],
    });

    beforeEach(() => {
        spectator = createService();
        // login = jest.fn(() => spectator.get(AuthenticationStore).setAuthenticationState(newState));
        // logout = jest.fn(() => spectator.get(AuthenticationStore).setAuthenticationState(initialState));
    });

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should call service.login()', () => {
        // const spyOnLogin = jest.spyOn(spectator.get(AuthenticationService), 'login').mockImplementationOnce(login);
        spectator.service.login();
        const spyOnSetAuthenticationState = jest.spyOn(
            spectator.get(AuthenticationStore), 'setAuthenticationState'
        );
        // spectator.service.login();
        // expect(spyOnLogin).toHaveBeenCalled();
        expect(spyOnSetAuthenticationState).toHaveBeenCalledWith(newState);
    });

    it('should call service.logout()', () => {
        // const spyOnLogout = jest.spyOn(spectator.get(AuthenticationService), 'logout').mockImplementationOnce(logout);
        spectator.service.logout();
        const spyOnSetAuthenticationState = jest.spyOn(
            spectator.get(AuthenticationStore), 'setAuthenticationState'
        );
        // spectator.service.logout();
        // expect(spyOnLogout).toHaveBeenCalled();
        expect(spyOnSetAuthenticationState).toHaveBeenCalledWith(initialState);
    });

});
