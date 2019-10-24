import { Component, OnInit } from '@angular/core';
import { ThemesService } from './_themesModule/_services/themes.service';
import { interval, concat } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from './_store/state/app.state';
import { selectThemeList, selectSelectedTheme } from './_store/selectors/theme.selector';
import { GetThemes, GetTheme } from './_store/actions/theme.actions';
import { switchMap } from 'rxjs/operators';
import { selectConfig } from './_store/selectors/config.selector';
import { GetConfig } from './_store/actions/config.actions';
import { timeout } from 'q';


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


    constructor(
        private _store: Store<IAppState>,
    ) { }

    ngOnInit() {
        this._store.dispatch(new GetConfig());
        this._store.dispatch(new GetThemes());
        setTimeout(() => {this._store.dispatch(new GetTheme('default'));}, 1000);




    }

}
