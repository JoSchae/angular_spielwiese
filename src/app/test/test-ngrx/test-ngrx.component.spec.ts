import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgrxComponent } from './test-ngrx.component';
import { TestDataFacade } from '../stores/ngrx/facades/testdata.facade.service';
import { Store } from '@ngrx/store';
import { TestNgrxStore } from '../stores/ngrx/testing/test.store';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';


describe('TestNgrxComponent', () => {
    let component: TestNgrxComponent;
    let fixture: ComponentFixture<TestNgrxComponent>;
    let facade: TestDataFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestNgrxComponent],
            providers: [
                TestDataFacade,
                provideMockStore({ })
            ]
            //     StoreModule.forRoot(
            //         testDataReducers, {
            //         runtimeChecks: {
            //             strictStateImmutability: true,
            //             strictActionImmutability: true,
            //             strictStateSerializability: true,
            //             strictActionSerializability: true
            //         }
            //     })
            // ]
        })
        .compileComponents();

        facade = TestBed.get(TestDataFacade);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestNgrxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
