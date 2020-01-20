import { AuthenticationFacade } from './authentication.facade';
import { SpyObject, HttpMethod } from '@ngneat/spectator';
import { SpectatorHttp, createHttpFactory } from '@ngneat/spectator/jest';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { AuthenticationStore } from '../_store/authentication/auth.store.service';
import { environment } from 'src/environments/environment';
import { marbles } from 'rxjs-marbles/marbles';

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
    // let service: SpyObject
    let store: SpyObject<AuthenticationStore>;
    const createService = createHttpFactory({
        service: AuthenticationFacade,
        // mocks: [AuthenticationStore]
        providers: [
            AuthenticationStore,
            AuthenticationService
        ]
    });

    beforeEach(() => {
        spectator = createService();
        store = spectator.get<AuthenticationStore>(AuthenticationStore);
    });

    afterEach(() => {
        spectator.controller.verify();
    });

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

    // it('should have the correct values', marbles(m => {

    //     spectator.service.login();
    //     const request = spectator.expectOne(
    //         `${environment.apiUrl}/${environment.authenticationEndpoint}`,
    //         HttpMethod.GET
    //     );
    //     let expected = m.cold('x', { x: initialState });
    //     const source = spectator.service.authentiationState$;
    //     m.expect(source).toBeObservable(expected);
    //     request.flush(response, { headers: null, status: 200, statusText: 'OK'});
    //     expected = m.cold('x-y', { x: initialState, y: newState });
    //     m.expect(source).toBeObservable(expected);
    //     spectator.service.logout();

    // }));
});
