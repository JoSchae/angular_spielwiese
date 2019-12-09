import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestService } from 'src/app/test/services/test.service';
import { TestDataEffects } from './testdata.effects';
import { GETAllTestData, GETAllTestDataSuccess } from '../actions/testdata.actions';
import { marbles } from 'rxjs-marbles/jest';


describe('test data effects', () => {

    let actions$: Observable<any>;
    let effects: TestDataEffects;
    let testService: TestService;

    const data = [
            {
                id: 0,
                vorname: 'johannes',
                nachname: 'schäfer',
                alter: 29,
                hobbies: ['zocken', 'coden', 'lesen', 'kochen', 'flachwitze']
            },
            {
                id: 1,
                vorname: 'jan',
                nachname: 'kohlhaas',
                alter: 32,
                hobbies: ['musik', 'biken', 'schwimmen', 'zocken']
            }
        ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TestDataEffects,
                provideMockActions(() => actions$),
                {
                    provide: TestService,
                    useValue: {
                        getTestData: jest.fn()
                    }
                }
            ]
        });
        effects = TestBed.get(TestDataEffects);
        testService = TestBed.get(TestService);
    });


    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should return GETAllTestDataSuccess with tes-data on success', marbles(m => {
        const action = GETAllTestData();
        const outcome = GETAllTestDataSuccess( { data } );

        actions$ = m.hot('          -^-a', { a: action });
        const response = m.cold('     -a|', { a: data });
        const expected = m.cold('    ---b', { b: outcome });
        testService.getTestData = jest.fn(() => response);

        m.expect(effects.GETAllTestData$).toBeObservable(expected);
    }));
});
