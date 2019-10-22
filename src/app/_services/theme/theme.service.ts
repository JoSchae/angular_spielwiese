import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IThemeHttp } from 'src/app/_models/http/theme-http.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    themeUrl = `${environment.apiUrl}/${environment.themeEndpoint}/themes.json`;

    constructor(private _http: HttpClient) { }

    getThemes(): Observable<IThemeHttp> {
        return this._http.get<IThemeHttp>(this.themeUrl);
    }
}
