import { ITestData } from 'src/app/test/services/test.service';
import { Observable } from 'rxjs';

export abstract class TestDataFacade {

    // DISPATCHERS

    abstract GETAllTestData(): void;

    abstract setSpecificTestData(specificData: ITestData): void;

    // SELECTORS

    abstract selectAllTestData(): Observable<ITestData[]>;

    abstract selectSpecificTestData(): Observable<ITestData>;

    abstract selectTestDataById(id: number): Observable<ITestData>;



}

