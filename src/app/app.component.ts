import { Component, OnInit } from '@angular/core';
import { ThemesService } from './_themesModule/_services/themes.service';
import { interval } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from './_store/state/app.state';
import { selectThemeList, selectSelectedTheme } from './_store/selectors/theme.selector';
import { GetThemes, GetTheme } from './_store/actions/theme.actions';


@Component({
    selector: 'tmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'template-app';

    themes$ = this._store.pipe(select(selectThemeList));
    theme$ = this._store.pipe(select(selectSelectedTheme));

    constructor(
        private _store: Store<IAppState>,
        ) { }

    ngOnInit() {
        this._store.dispatch(new GetThemes())
        interval(5000).subscribe(
            x => {
                if (x % 2 !== 0) {
                    this._store.dispatch(new GetTheme('default'));
                } else {
                    this._store.dispatch(new GetTheme('mandantOne'));
                }
            }
        );
        // interval(10000).subscribe(
        //     () => {
        //         const test = this.themesService.getActiveTheme();
        //         if (test.name === 'default') {
        //             this.themesService.setTheme('mandantOne');
        //         } else {
        //             this.themesService.setTheme('default');
        //         }
        //     }
        // );
    }

}
