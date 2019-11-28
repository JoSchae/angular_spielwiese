import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { IAppState } from './_store/state/app.state';
import { rootRoutes } from './app-routing.module';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    // let store: MockStore<{ authentication: { token: string, isLoggedIn: boolean } }>;
    // const initialState = { authentication: { token: null, isLoggedIn: false } };
    // let cookieService: CookieService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(rootRoutes)
            ],
            declarations: [
                AppComponent
            ],
            // providers: [
            //     // CookieService,
            //     // provideMockStore({ initialState })
            // ]
        }).compileComponents();
    }));

    beforeAll(() => {
        // store = TestBed.get<Store<IAppState>>(Store);
        // cookieService = TestBed.get(CookieService);
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app-component', () => {
        expect(component).toBeTruthy();
    });

});
