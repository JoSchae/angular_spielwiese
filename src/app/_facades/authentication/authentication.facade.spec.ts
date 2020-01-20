import { AuthenticationFacade } from './authentication.facade';
import { SpyObject } from '@ngneat/spectator';
import { SpectatorHttp, createHttpFactory } from '@ngneat/spectator/jest';
import { AuthenticationStore } from '../../_stores/authentication/auth.store.service';
import { AuthenticationService } from '../../_services/authentication/authentication.service';


describe('Authentication Facade', () => {

    const response = {
        authentication: {
            token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983'
        }
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
    let store: SpyObject<AuthenticationStore>;
    const createService = createHttpFactory({
        service: AuthenticationFacade,
        mocks: [
            AuthenticationStore,
            AuthenticationService
        ]
    });

    beforeEach(() => {
        spectator = createService();
        store = spectator.get<AuthenticationStore>(AuthenticationStore);
    });

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

});
