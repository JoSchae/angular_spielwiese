import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserHttp } from 'src/app/_models/http/user-http.interface';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { mapUsers } from 'src/app/_core-functions/core-functions';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_models/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _http: HttpClient) { }

    loadUsers(): Observable<IUser[]> {
        return this._http.get<IUserHttp>(`${environment.apiUrl}/${environment.usersEndpoint}`).pipe(
            map(response => mapUsers(response))
        );
    }
}
