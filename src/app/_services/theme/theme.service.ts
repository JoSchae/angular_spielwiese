import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IThemeHttp } from 'src/app/_models/http/theme-http.interface';
import { tap, map } from 'rxjs/operators';
import { ITheme } from 'src/app/_models/theme';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    themesUrl = `${environment.apiUrl}/${environment.themeEndpoint}/themes.json`;

    constructor(private _http: HttpClient) { }

    getThemes(): Observable<IThemeHttp> {
        return this._http.get<IThemeHttp>(this.themesUrl).pipe(tap(val => console.log('service', val)));
    }
}
