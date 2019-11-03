import { IAuthenticationState } from '../state/authentication.state';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

const selectAuthentication = (state: IAppState) => state.authentication;


export const selectSetAuthentication = createSelector(
    selectAuthentication,
    (state: IAuthenticationState) => ({token: state.token, isLoggedIn: state.isLoggedIn})
);
