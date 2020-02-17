import { AuthenticationFacade } from './authentication.facade';
import { SpectatorHttp, createHttpFactory } from '@ngneat/spectator/jest';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { initialAppState } from '../../_ngrx/state/app.state';
import { provideMockActions } from '@ngrx/effects/testing';
import * as actions from '../../_ngrx/actions/authentication.actions';

describe('Authentication Facade', () => {

    const response = {
        token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983'
    };

    let spectator: SpectatorHttp<AuthenticationFacade>;
    let actions$: Observable<any>;
    const createService = createHttpFactory({
        service: AuthenticationFacade,
        providers: [
            {
                provide: AuthenticationService,
                useValue: {
                    getToken: jest.fn(() => of(response))
                }
            },
            provideMockStore({ initialState: initialAppState }),
            provideMockActions(actions$)
        ],
    });

    beforeEach(() => {
        spectator = createService();
    });

    it('should create', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should dispatch the correct login action', () => {
        const storeSpy = jest.spyOn(spectator.get(Store), 'dispatch');
        spectator.service.loginNGRX();
        expect(storeSpy).toHaveBeenCalledWith(actions.getAuthentication());
    });

    it('should dispatch the correct logout action', () => {
        const storeSpy = jest.spyOn(spectator.get(Store), 'dispatch');
        spectator.service.logoutNGRX();
        expect(storeSpy).toHaveBeenCalledWith(actions.logout());
    });

});
