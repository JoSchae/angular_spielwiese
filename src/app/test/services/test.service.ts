import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as coreFunctions from '../../_core-functions/core-functions';

export interface ITestData {
    vorname: string;
    nachname: string;
    alter: number;
    hobbies: string[];
}

export interface ITestDataHttp {
    data: {
        vorname: string;
        nachname: string;
        alter: number;
        hobbies: string;
    }[];
}

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private _http: HttpClient) { }

    public getTestData(): Observable<any[]> {
        return this._http.get<ITestDataHttp>(`${environment.apiUrl}/${environment.testDataEndpoint}`).pipe(
            map(response => coreFunctions.mapTestData(response))
        );
    }

}
