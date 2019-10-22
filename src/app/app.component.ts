import { Component, OnInit } from '@angular/core';
import { ThemesService } from './_themesModule/_services/themes.service';
import { interval } from 'rxjs';
import { IAppState } from './_store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectConfig } from './_store/selectors/config.selector';
import { GetConfig } from './_store/actions/config.actions';


@Component({
    selector: 'tmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'template-app';
    config$ = this._store.pipe(select(selectConfig));

    constructor(private _store: Store<IAppState>, private themesService: ThemesService) { }

    ngOnInit() {
        this._store.dispatch(new GetConfig());

        interval(10000).subscribe(
            () => {
                const test = this.themesService.getActiveTheme();
                if (test.name === 'default') {
                    this.themesService.setTheme('mandantOne');
                } else {
                    this.themesService.setTheme('default');
                }
            }
        );
    }

}
