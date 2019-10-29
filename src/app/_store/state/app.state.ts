import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';
import { IThemeState, initialThemeState } from './theme.state';
import { initialAuthenticationState, IAuthenticationState } from './authentication.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
    themes: IThemeState;
    authentication: IAuthenticationState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
    config: initialConfigState,
    themes: initialThemeState,
    authentication: initialAuthenticationState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
