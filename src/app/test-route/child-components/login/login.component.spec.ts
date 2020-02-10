import { LoginComponent } from './login.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AuthenticationStore } from 'src/app/_stores/authentication/auth.store.service';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { LoginViewComponent } from './_view/login-view.component';
import { AuthenticationFacade } from 'src/app/_facades/authentication/authentication.facade';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { initialAppState } from 'src/app/_ngrx/state/app.state';

describe('LoginComponent', () => {

    const authState = {
        token: null,
        isLoggedIn: false
    };

    let spectator: Spectator<LoginComponent>;
    const createComponent = createComponentFactory({
        component: LoginComponent,
        declarations: [
            LoginViewComponent
        ],
        providers: [
            {
                provide: AuthenticationFacade,
                useValue: {
                    authenticationState$: of(authState),
                    login: jest.fn(),
                    logout: jest.fn()
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
        const login = jest.spyOn(spectator.get(AuthenticationFacade), 'login');
        spectator.component.onOutputRecived('login');
        expect(login).toHaveBeenCalled();
    });

    it('logout', () => {
        const logout = jest.spyOn(spectator.get(AuthenticationFacade), 'logout');
        spectator.component.onOutputRecived('logout');
        expect(logout).toHaveBeenCalled();
    });

});
