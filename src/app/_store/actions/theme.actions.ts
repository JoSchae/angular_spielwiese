import { Action } from '@ngrx/store';
import { ITheme } from 'src/app/_models/theme.interface';

export enum EThemeActions {
    GetTheme = '[Theme] Get Theme',
    GetThemeSuccess = '[Theme] Get Theme Success',
    GetThemes = '[Theme] Get Themes',
    GetThemesSuccess = '[Theme] Get Themes Success',
    SetThemeProperties = '[Theme] Set Theme Properties',
    SetThemePropertiesSuccess = '[Theme] Set Theme Properties Success',
}

export class GetTheme implements Action {
    public readonly type = EThemeActions.GetTheme;
    constructor(public payload: string) { }
}

export class GetThemeSuccess implements Action {
    public readonly type = EThemeActions.GetThemeSuccess;
    constructor(public payload: ITheme) { }
}

export class GetThemes implements Action {
    public readonly type = EThemeActions.GetThemes;
}

export class GetThemesSuccess implements Action {
    public readonly type = EThemeActions.GetThemesSuccess;
    constructor(public payload: ITheme[]) { }
}

export class SetThemeProperties implements Action {
    public readonly type = EThemeActions.SetThemeProperties;
}

export class SetThemePropertiesSuccess implements Action {
    public readonly type = EThemeActions.SetThemePropertiesSuccess;
    constructor(public payload: ITheme[]) { }
}

export type ThemeActions =
    GetTheme | GetThemeSuccess |
    GetThemes | GetThemesSuccess |
    SetThemeProperties | SetThemePropertiesSuccess;
