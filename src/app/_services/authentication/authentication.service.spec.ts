import { AuthenticationService } from './authentication.service';
import { createHttpFactory, SpectatorHttp, HttpMethod, createSpyObject } from '@ngneat/spectator/jest';
import { marbles } from 'rxjs-marbles/jest';
import { environment } from '../../../environments/environment';
import { SpyObject } from '@ngneat/spectator';
import { AuthenticationStore } from 'src/app/_store/authentication/auth.store.service';

describe('Authentication Service', () => {

    const newState = {
        token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983',
        isLoggedIn: true
    };

    const noTokenState = {
        token: null,
        isLoggedIn: false
    };

    let spectator: SpectatorHttp<AuthenticationService>;
    let store: SpyObject<AuthenticationStore>;
    const createService = createHttpFactory({
        service: AuthenticationService,
        providers: [AuthenticationStore]
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

    it('should return a token and call setAuthenticationState with const newState', () => {
        const spy = jest.spyOn(store, 'setAuthenticationState');
        spectator.service.login();
        const request = spectator.expectOne(
            `${environment.apiUrl}/${environment.authenticationEndpoint}`,
            HttpMethod.GET
        );
        request.flush({
            authentication: {
                token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983'
            }
        });
        expect(request.request.method).toBe('GET');
        expect(request.request.url).toBe(`${environment.apiUrl}/${environment.authenticationEndpoint}`);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(newState);
    });

    it('should recive error from getToken and not call setAuthenticationState', () => {
        const spy = jest.spyOn(store, 'setAuthenticationState');
        spectator.service.login();
        const request = spectator.expectOne(
            `${environment.apiUrl}/${environment.authenticationEndpoint}`,
            HttpMethod.GET
        );
        request.error(new ErrorEvent('Some Error'));
        expect(request.request.method).toBe('GET');
        expect(request.request.url).toBe(`${environment.apiUrl}/${environment.authenticationEndpoint}`);
        expect(spy).toHaveBeenCalledTimes(0);
    });

    it('should call setAuthenticationState with const noTokenState', () => {
        const spy = jest.spyOn(store, 'setAuthenticationState');
        spectator.service.logout();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(noTokenState);
    });

});
