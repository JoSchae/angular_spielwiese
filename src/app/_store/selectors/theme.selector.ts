import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { IThemeState } from '../state/theme.state';

const selectThemes = (state: IAppState) => state.themes;

export const selectThemeList = createSelector(
    selectThemes,
    (state: IThemeState) => state.themes
);

export const selectSelectedTheme = createSelector(
    selectThemes,
    (state: IThemeState) => state.selectedTheme
);
