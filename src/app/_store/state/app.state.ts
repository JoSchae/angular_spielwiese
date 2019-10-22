import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';
import { IThemeState, initialThemeState } from './theme.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
    themes: IThemeState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
    config: initialConfigState,
    themes: initialThemeState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
