import { Injectable } from "@angular/core";
import { TestDataFacade } from './testdata.facade';
import { ITestData } from 'src/app/test/services/test.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class TestDataFacadeMock implements TestDataFacade {

    private data = [
        {
            id: 0,
            vorname: 'johannes',
            nachname: 'schäfer',
            alter: 29,
            hobbies: ['zocken', 'coden', 'lesen', 'kochen', 'flachwitze']
        }
    ];

    private specificData = {
        id: 0,
        vorname: 'johannes',
        nachname: 'schäfer',
        alter: 29,
        hobbies: ['zocken', 'coden', 'lesen', 'kochen', 'flachwitze']
    };

    public mockData: ITestData[] = this.data;
    public mockSpecificData: ITestData = this.data[0];

    GETAllTestData(): void { }

    setSpecificTestData(specificData: ITestData): void { }

    selectAllTestData(): Observable<ITestData[]> {
        return of(this.mockData);
    }
    selectSpecificTestData(): Observable<ITestData> {
        return of(this.mockSpecificData);
    }
    selectTestDataById(id: number): Observable<ITestData> {
        return of(this.mockSpecificData);
    }



}
