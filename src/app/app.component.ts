import { Component, OnInit } from '@angular/core';
import { interval, concat } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from './_store/state/app.state';
import { selectThemeList, selectSelectedTheme } from './_store/selectors/theme.selector';
import { GetThemes, GetTheme } from './_store/actions/theme.actions';
import { switchMap, delay, concatMap, withLatestFrom } from 'rxjs/operators';
import { selectConfig } from './_store/selectors/config.selector';
import { GetConfig } from './_store/actions/config.actions';
import { timeout } from 'q';
import { GetAuthentication } from './_store/actions/authentication.actions';
import { selectSelectedAuthentication } from './_store/selectors/authentication.selector';


@Component({
    selector: 'tmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'template-app';
    config$ = this._store.pipe(select(selectConfig));
    themes$ = this._store.pipe(select(selectThemeList));
    selectedTheme$ = this._store.pipe(select(selectSelectedTheme));
    authorization = this._store.pipe(select(selectSelectedAuthentication))


    constructor(
        private _store: Store<IAppState>,
    ) { }

    ngOnInit() {

        this._store.dispatch(new GetAuthentication());
        this.authorization.subscribe(
            val => console.error(val)
        )

        // this._store.dispatch(new GetConfig());
        // this._store.dispatch(new GetThemes());
        // interval(10000).subscribe(
        //     val => {
        //         if (val % 2 !== 0) {
        //             this._store.dispatch(new GetTheme('mandantOne'));
        //         } else {
        //             this._store.dispatch(new GetTheme('default'));
        //         }
        //     }
        // );




    }

}
