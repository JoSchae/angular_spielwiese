import { AuthenticationService } from './authentication.service';
import { createHttpFactory, SpectatorHttp, HttpMethod, createSpyObject } from '@ngneat/spectator/jest';
import { marbles } from 'rxjs-marbles/jest';
import { environment } from '../../../environments/environment';
import { SpyObject } from '@ngneat/spectator';
import { HttpErrorResponse } from '@angular/common/http';
import { IAuthenticationHttp } from 'src/app/_models/authentication.interface';

describe('Authentication Service', () => {

    let spectator: SpectatorHttp<AuthenticationService>;
    const createService = createHttpFactory({
        service: AuthenticationService,
    });

    beforeEach(() => {
        spectator = createService();
    });

    afterEach(() => {
        spectator.controller.verify();
    });

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should return a token and call setAuthenticationState with const newState', () => {
        const authenticationResponse = {
            authentication: {
                token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983'
            }
        } as IAuthenticationHttp;
        spectator.service.getToken().subscribe(
            val => expect(val).toBe(authenticationResponse)
        );
        const request = spectator.expectOne(
            `${environment.apiUrl}/${environment.authenticationEndpoint}`,
            HttpMethod.GET
        );
        request.flush(authenticationResponse);
        expect(request.request.method).toBe('GET');
        expect(request.request.url).toBe(`${environment.apiUrl}/${environment.authenticationEndpoint}`);
    });

    it('should recive error from getToken and not call setAuthenticationState', () => {
        spectator.service.getToken().subscribe(
            val => {},
            err => expect(err).toBe(HttpErrorResponse)
        );
        const request = spectator.expectOne(
            `${environment.apiUrl}/${environment.authenticationEndpoint}`,
            HttpMethod.GET
        );
        request.error(new ErrorEvent('Some Error'));
        expect(request.request.method).toBe('GET');
        expect(request.request.url).toBe(`${environment.apiUrl}/${environment.authenticationEndpoint}`);
    });

});
