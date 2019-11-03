import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { IAppState } from './_store/state/app.state';

describe('AppComponent', () => {

    let component: TestComponent;
    let fixture: ComponentFixture<AppComponent>;
    let store: MockStore<{ authentication: { token: string, isLoggedIn: boolean } }>;
    const initialState = { authentication: { token: null, isLoggedIn: false } };
    let cookieService: CookieService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                CookieService,
                provideMockStore({ initialState })
            ]
        }).compileComponents();
    }));

    beforeAll(() => {
        store = TestBed.get<Store<IAppState>>(Store);
        cookieService = TestBed.get(CookieService);
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app-component', () => {
        expect(component).toBeTruthy();
    });

});
