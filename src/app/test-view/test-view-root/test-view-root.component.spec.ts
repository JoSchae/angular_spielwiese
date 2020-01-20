import { TestViewRootComponent } from './test-view-root.component';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { TestViewModule } from '../test-view.module';
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
