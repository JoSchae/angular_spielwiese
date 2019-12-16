import { RouterReducerState } from '@ngrx/router-store';
import { initialAuthenticationState, IAuthenticationState } from './authentication.state';
import { ITestDataState } from 'src/app/test/stores/ngrx/states/testdata.state';

export interface IAppState {
    router?: RouterReducerState;
    authentication: IAuthenticationState;
    data?: ITestDataState;
}

export const initialAppState: IAppState = {
    authentication: initialAuthenticationState,
};

// export function getInitialState(): IAppState {
//     return initialAppState;
// }
