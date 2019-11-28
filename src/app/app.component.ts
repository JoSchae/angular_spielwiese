import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './_store/state/app.state';
import { selectAuthentication, selectIsLoggedIn } from './_store/selectors/authentication.selectors';
import { CookieService } from 'ngx-cookie-service';
import * as authenticationActions from './_store/actions/authentication.actions';


@Component({
    selector: 'tmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    // private _myCookie = this._cookieService.getAll();

    // // authentication$ = this._store.pipe(select(selectAuthentication));
    // isLoggedIn$ = this._store.pipe(select(selectIsLoggedIn));

    constructor(
        // private _store: Store<IAppState>,
        // private _cookieService: CookieService
    ) { }

    ngOnInit() {
        // if (!this._myCookie) {
        //     this._cookieService.set(
        //         'my-token-cookie', // name
        //         '', // value
        //         null, // expireDate (null = session)
        //         '/', // path
        //         'localhost', // domain
        //         false, // secure
        //         'Lax' // sameSite
        //     );
        // }
        // this._store.dispatch(authenticationActions.getAuthentication());
    }

}
