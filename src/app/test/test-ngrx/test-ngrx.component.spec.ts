import { TestNgrxComponent } from './test-ngrx.component';
import { createComponentFactory, Spectator, mockProvider } from '@ngneat/spectator/jest';
import { TestDataFacade } from '../stores/ngrx/facades/testdata.facade';
import { TestDataFacadeMock } from '../stores/ngrx/facades/testdata-mock.facade';
import { TestDataFacadeImpl } from '../stores/ngrx/facades/testdata-impl.facade';
import { GETAllTestData } from '../stores/ngrx/actions/testdata.actions';
import { of } from 'rxjs';

describe('TestNgrxComponent', () => {

    const createComponent = createComponentFactory({
        component: TestNgrxComponent,
        componentProviders: [
            {
                provide: TestDataFacade,
                useClass: TestDataFacadeMock
            }
        ]
    });

    let spectator: Spectator<TestNgrxComponent>;
    let component: TestNgrxComponent;
    let service: TestDataFacade;

    beforeEach(() => {
        spectator = createComponent();
        component = spectator.component;
        service = spectator.get(TestDataFacade, true);
        spectator.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have all 3 selectors defined', () => {
        expect(component.testData$).toBeDefined();
        expect(component.specificData$).toBeDefined();
        expect(component.testDataById$).toBeDefined();
    });

    it('should match the markup after ngInit', () => {
        expect(spectator.fixture).toMatchSnapshot();
    });
});
