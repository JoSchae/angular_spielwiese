
import { LoginNGRXViewComponent } from './login-ngrx-view.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

describe('LoginNGRXViewComponent', () => {

    let spectator: Spectator<LoginNGRXViewComponent>;
    const createComponent = createComponentFactory({
        component: LoginNGRXViewComponent
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('is logged out', () => {
        spectator.component.isLoggedIn = false;
        spectator.fixture.detectChanges();
        expect(spectator.fixture).toMatchSnapshot();
    });

    it('is loggedn in', () => {
        spectator.component.isLoggedIn = true;
        spectator.fixture.detectChanges();
        expect(spectator.fixture).toMatchSnapshot();
    });

    it('should emit login', () => {
        const loginBtn = spectator.queryAll('button')[0];
        const methodSpy = jest.spyOn(spectator.component, 'emitButtonPress');
        const emitterSpy = jest.spyOn(spectator.component.buttonEmitter, 'emit');
        spectator.click(loginBtn);
        expect(methodSpy).toHaveBeenCalledWith('login');
        expect(emitterSpy).toBeCalledWith('login');
    });

    it('should emit logout', () => {
        const logoutBtn = spectator.queryAll('button')[1];
        const methodSpy = jest.spyOn(spectator.component, 'emitButtonPress');
        const emitterSpy = jest.spyOn(spectator.component.buttonEmitter, 'emit');
        spectator.click(logoutBtn);
        expect(methodSpy).toHaveBeenCalledWith('logout');
        expect(emitterSpy).toBeCalledWith('logout');
    });
});
