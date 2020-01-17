// import { Spectator, createRoutingFactory, byText, byTitle, byLabel, byValue, HttpMethod } from '@ngneat/spectator/jest';
// import { AppComponent } from './app.component';
// import { AuthenticationFacade } from '../_facades/authentication.facade';
// import { AuthenticationService } from '../_services/authentication/authentication.service';
// import { AuthenticationStore } from '../_store/authentication/auth.store.service';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// import { environment } from 'src/environments/environment';


// describe('AppComponent', () => {

//     let spectator: Spectator<AppComponent>;
//     const createComponent = createRoutingFactory({
//         component: AppComponent,
//         providers: [
//             AuthenticationFacade,
//             AuthenticationService,
//             AuthenticationStore,
//             HttpTestingController
//         ],
//         imports: [
//             HttpClientTestingModule
//         ],
//         mocks: [],
//         stubsEnabled: false,
//         routes: []
//     });

//     beforeEach(() => {
//         spectator = createComponent();
//         spectator.fixture.autoDetectChanges(true);
//         // spectator.fixture.detectChanges();
//         // jest.setTimeout(10000);
//     });

//     it('should create', () => {
//         expect(spectator.component).toBeTruthy();
//     });

//     it('should match initial snapshot', () => {
//         expect(spectator.fixture).toMatchSnapshot();


//         // spectator.component.ngOnInit();
//         // spectator.fixture.detectChanges();
//         // await spectator.fixture.whenStable();
//         // expect(spectator.fixture).toMatchSnapshot();
//     });

//     it('should match snapshot after ngOnInit', (done) => {

//         // const request = http.expectOne(
//         //     `${environment.apiUrl}/${environment.authenticationEndpoint}`
//         // );
//         // // const request = http.expectOne()

//         const loginBtn = spectator.query('.loginBtn') as HTMLButtonElement;
//         spectator.click(loginBtn);

//         // request.flush({
//         //     authentication: {
//         //         token: 'e8375jc3z4.8f5c3984zt98745tc984376c98f54987.53984cd4983'
//         //     }
//         // });
//         spectator.fixture.detectChanges();
//         spectator.fixture.whenStable().then(
//             () => {
//                 console.log('I\'M HERE')
//                 expect(spectator.fixture.nativeElement).toMatchSnapshot();
//                 http.verify();
//                 done();
//             }

//         );
//     });
// });
