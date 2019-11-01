import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
import { IAuthentication } from 'src/app/_models/authentication.interface';
import { HttpErrorResponse } from '@angular/common/http';

describe('AuthenticationService', () => {

    let injector: TestBed;
    let service: AuthenticationService;
    let httpMock: HttpTestingController;

    const testToken = 'some_test_token';
    const validResponse = ({token: testToken, isLoggedIn: undefined}) as IAuthentication;
    const errorResponse = new ErrorEvent('test');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthenticationService]
        });
        injector = getTestBed();
        service = injector.get(AuthenticationService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get a token', () => {
        service.getToken().subscribe(
            response => {
                expect(response.authentication).toEqual(validResponse);
            }
        );
        const authenticationRequest = httpMock.expectOne(
            `${environment.apiUrl}/${environment.authenticationEndpoint}`
        );
        authenticationRequest.flush(validResponse);
    });

    it('should get error out', () => {
        service.getToken().subscribe(
            next => {},
            err => expect(err.error).toEqual(errorResponse)
        );
        const authenticationRequest = httpMock.expectOne(
            `${environment.apiUrl}/${environment.authenticationEndpoint}`
        );
        authenticationRequest.error(errorResponse);
    });
});
