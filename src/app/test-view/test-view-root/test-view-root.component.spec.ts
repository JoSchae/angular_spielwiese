import { TestViewRootComponent } from './test-view-root.component';
import { SpectatorRouting, createRoutingFactory, Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { LoginComponent } from '../child-components/login/login.component';
import { LoginViewComponent } from '../child-components/login/login-view/login-view.component';
import { TestViewModule } from '../test-view.module';
import { TestViewRoutingModule } from '../test-view-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TestViewRootComponent', () => {

    let spectator: SpectatorRouting<TestViewRootComponent>;
    const createComponent = createRoutingFactory({
        component: TestViewRootComponent,
        imports: [
            TestViewModule,
            RouterTestingModule
        ],
        declareComponent: false,
        // stubsEnabled: false,
        // routes: [
        //     {
        //         path: 'test',
        //         children: [
        //             { path: '', redirectTo: 'login', pathMatch: 'full' },
        //             { path: 'login', component: LoginComponent }
        //         ]
        //     }
        // ]
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have correct initial snapshot', () => {
        expect(spectator.fixture).toMatchSnapshot();
    });
});
