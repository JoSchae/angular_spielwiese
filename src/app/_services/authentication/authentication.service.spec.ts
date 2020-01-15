import { AuthenticationService } from './authentication.service';
import { createHttpFactory, SpectatorHttp, HttpMethod } from '@ngneat/spectator/jest';
import { AuthenticationStore } from 'src/app/_store/authentication/auth.store.service';
import { marbles } from 'rxjs-marbles/jest';
import { environment } from '../../../environments/environment';
import { SpyObject } from '@ngneat/spectator';

describe('AuthenticationService', () => {

    let spectator: SpectatorHttp<AuthenticationService>;
    let store: SpyObject<AuthenticationStore>
    const createService = createHttpFactory({
        service: AuthenticationService,
        mocks: [AuthenticationStore]
    });

    beforeEach(() => spectator = createService());

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should return a token', marbles(m => {
        spectator.service.login();
        spectator.expectOne(
            `${environment.apiUrl}/${environment.authenticationEndpoint}`,
            HttpMethod.GET
        );
    }));

});
