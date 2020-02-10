import { Spectator, createComponentFactory } from "@ngneat/spectator/jest";
import { LoginNGRXComponent } from './loginNGRX.component';
import { LoginNGRXViewComponent } from './_view/login-ngrx-view/login-ngrx-view.component';
import { AuthenticationFacade } from 'src/app/_facades/authentication/authentication.facade';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { initialAppState } from 'src/app/_ngrx/state/app.state';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { AuthenticationStore } from 'src/app/_stores/authentication/auth.store.service';

describe('LoginNGRXComponent', () => {

    const initialState = {
        token: null,
        isLoggedIn: false
    }

    let spectator: Spectator<LoginNGRXComponent>;
    const createComponent = createComponentFactory({
        component: LoginNGRXComponent,
        declarations: [
            LoginNGRXViewComponent
        ],
        providers: [
            {
                provide: AuthenticationFacade,
                useValue: {
                    authenticationNGRXState: of(initialState),
                    loginNGRX: jest.fn(),
                    logoutNGRX: jest.fn()
                }
            },
            provideMockStore({ initialState: initialAppState })
        ],
        mocks: [
            AuthenticationStore,
            AuthenticationService,
        ]
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('login', () => {
        const login = jest.spyOn(spectator.get(AuthenticationFacade), 'loginNGRX');
        spectator.component.onOutputRecived('login');
        expect(login).toHaveBeenCalled();
    });

    it('logout', () => {
        const logout = jest.spyOn(spectator.get(AuthenticationFacade), 'logoutNGRX');
        spectator.component.onOutputRecived('logout');
        expect(logout).toHaveBeenCalled();
    });
});
