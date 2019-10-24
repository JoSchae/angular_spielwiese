import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ThemeService } from 'src/app/_services/theme/theme.service';
import { GetTheme, EThemeActions, GetThemeSuccess, GetThemes, GetThemesSuccess } from '../actions/theme.actions';
import { map, withLatestFrom, switchMap, tap, catchError } from 'rxjs/operators';
import { selectThemeList } from '../selectors/theme.selector';
import { of } from 'rxjs';
import { IThemeHttp } from 'src/app/_models/http/theme-http.interface';

@Injectable()
export class ThemeEffects {

    constructor(
        private _store: Store<IAppState>,
        private _actions$: Actions,
        private _themeService: ThemeService
    ) { }

    @Effect()
    getTheme$ = this._actions$.pipe(
        ofType<GetTheme>(EThemeActions.GetTheme),
        tap(_ => console.log(_)),
        map(action => action.payload),
        tap(_ => console.log(_)),
        withLatestFrom(this._store.pipe(select(selectThemeList))),
        // switchMap to dispatch action GetThemes, if themes is undefined/null
        switchMap(([name, themes]) => {
            console.log(name, themes);
            const selectedTheme = themes.find(theme => theme.name === name);
            console.log('selectedTheme', selectedTheme)
            this._themeService.setSelectedTheme(selectedTheme);
            return of(new GetThemeSuccess(selectedTheme));
        })
    );

    @Effect()
    getThemes$ = this._actions$.pipe(
        ofType<GetThemes>(EThemeActions.GetThemes),
        switchMap(() => this._themeService.getThemes()),
        switchMap((themeHttp: IThemeHttp) => of(new GetThemesSuccess(themeHttp.themes)))
    );
}
