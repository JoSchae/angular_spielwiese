import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducer';
import { configReducers } from './config.reducer';
import { themeReducers } from './theme.reducer';
import { authenticationReducers } from './authentication.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers,
    themes: themeReducers,
    authentication: authenticationReducers,
};
