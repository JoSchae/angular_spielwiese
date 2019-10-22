import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IConfig } from 'src/app/_models/config.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    configUrl = `${environment.apiUrl}/data/config.json`;

    constructor(private _http: HttpClient) { }

    getConfig(): Observable<IConfig> {
        return this._http.get<IConfig>(this.configUrl);
    }
}
