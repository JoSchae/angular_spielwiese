import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgrxComponent } from './test-ngrx.component';
import { TestService } from '../services/test.service';
import { testDataReducers } from '../stores/ngrx/reducer/testdata.reducer';
import { StoreModule } from '@ngrx/store';

describe('TestNgrxComponent', () => {
    let component: TestNgrxComponent;
    let fixture: ComponentFixture<TestNgrxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestNgrxComponent],
            imports: [
                StoreModule.forRoot(
                    testDataReducers, {
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true,
                        strictStateSerializability: true,
                        strictActionSerializability: true
                    }
                })
            ]
        })
        .compileComponents();
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
