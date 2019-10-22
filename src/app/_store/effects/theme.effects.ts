import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ThemeService } from 'src/app/_services/theme/theme.service';
import { GetTheme, EThemeActions, GetThemeSuccess, GetThemes, GetThemesSuccess } from '../actions/theme.actions';
import { map, withLatestFrom, switchMap, tap } from 'rxjs/operators';
import { selectActiveTheme, selectThemeList } from '../selectors/theme.selector';
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
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectThemeList))),
        tap(_ => console.log(_)),
        switchMap(([name, themes]) => {
            const activeTheme = themes.find(theme => theme.name === name);
            return of(new GetThemeSuccess(activeTheme));
        })
    );

    @Effect()
    getThemes$ = this._actions$.pipe(
        ofType<GetThemes>(EThemeActions.GetThemes),
        switchMap(() => this._themeService.getThemes()),
        tap(_ => console.log(_)),
        switchMap((themeHttp: IThemeHttp) => of(new GetThemesSuccess(themeHttp.themes)))
    );
}
