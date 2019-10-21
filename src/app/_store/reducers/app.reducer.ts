import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducer';
import { configReducers } from './config.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers
};
