import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mapTestData } from 'src/app/_core-functions/core-functions';

export interface TestData {
    vorname: string;
    nachname: string;
    alter: number;
    hobbies: string;
}

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private _http: HttpClient) { }

    public getTestData(): Observable<any[]> {
        return this._http.get<any[]>(`${environment.apiUrl}/${environment.testDataEndpoint}`).pipe(
            map(response => {
                if (response['data']) {
                    return response['data'].map<any>(data => {

                        return {
                            vorname: data.vorname,
                            nachname: data.nachname,
                            alter: data.alter,
                            hobbies: data.hobbies
                        }
                    });
                }
                return response;
            })
        );
    }
}
