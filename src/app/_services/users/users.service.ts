import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUserHttp } from 'src/app/_models/http/user-http.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    usersUrl = `${environment.apiUrl}/${environment.usersEndpoint}/users.json`;

    constructor(private _http: HttpClient) { }

    getUsers(): Observable<IUserHttp> {
        return this._http.get<IUserHttp>(this.usersUrl);
    }
}
