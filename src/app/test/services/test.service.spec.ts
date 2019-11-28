import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestService } from './test.service';
import { environment } from 'src/environments/environment';

describe('TestService', () => {

    let service: TestService;
    let http: HttpTestingController;

    const expectedData = [
        {
            vorname: 'johannes',
            nachname: 'schäfer',
            alter: '29',
            hobbies: 'zocken,coden,lesen,kochen,flachwitze'
        },
        {
            vorname: 'jan',
            nachname: 'kohlhaas',
            alter: '32',
            hobbies: 'musik,biken,schwimmen,zocken'
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [
                TestService
            ]
        });

        service = TestBed.get(TestService);
        http = TestBed.get(HttpTestingController);
    });

    afterEach(inject([HttpTestingController], (_http: HttpTestingController) => {
        _http.verify();
    }));

    it('should create an instance successfully', () => {
        expect(service).toBeDefined();
    });

    it('should GET all test data', () => {
        let actualData = {};

        service.getTestData().subscribe(
            response => actualData = response,
            error => console.error(error)
        );

        http.expectOne((req: HttpRequest<any>) => {
            return req.url === `${environment.apiUrl}/${environment.testDataEndpoint}` && req.method === 'GET';
        }, `GET all test data from ${environment.apiUrl}/${environment.testDataEndpoint}`)
            .flush(expectedData);

        expect(actualData).toEqual(expectedData);
    });


});

