import { RouterReducerState } from '@ngrx/router-store';
import { initialAuthenticationState, IAuthenticationState } from './authentication.state';

export interface IAppState {
    router?: RouterReducerState;
    authentication: IAuthenticationState;
}

export const initialAppState: IAppState = {
    authentication: initialAuthenticationState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
