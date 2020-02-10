import { SpectatorService, createServiceFactory } from "@ngneat/spectator/jest";
import { AuthenticationEffects } from './authentication.effects';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import * as authenticationActions from '../actions/authentication.actions';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { marbles } from 'rxjs-marbles/jest';
import { IAuthenticationState } from '../state/authentication.state';
import { of, Observable } from 'rxjs';

const auth = {
    token: 'my-test-token',
    isLoggedIn: true
} as IAuthenticationState;



describe('ngrx Authentication Effects', () => {
    let spectator: SpectatorService<AuthenticationEffects>;
    let actions$: Observable<any>;

    const createService = createServiceFactory({
        service: AuthenticationEffects,
        providers: [
            {
                provide: AuthenticationService,
                useValue: {
                    getToken: jest.fn(() => of(auth))
                },
            },
            provideMockActions(() => actions$),
        ],
        // mocks: [
        //     Actions
        // ]
    });

    beforeEach(() => {
        spectator = createService();
    });

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should return getAuthenticationSuccess on success', marbles(m => {
        const action = authenticationActions.getAuthentication;
        const outcome = authenticationActions.getAuthenticationSuccess({ payload: auth });

        actions$ = m.hot('-^-a', { a: action });
        const expected = m.cold('--b', { b: outcome });

        m.expect(spectator.service.getAuthentication$).toBeObservable(expected);
    }));

});
