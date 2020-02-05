import { IAuthenticationState } from '../state/authentication.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const selectAuthenticationState = createFeatureSelector<IAuthenticationState>('authentication');

export const selectAuthentication = createSelector(
    selectAuthenticationState,
    authentication => authentication
);

export const selectToken = createSelector(
    selectAuthenticationState,
    authentication => authentication.token
);

export const selectIsLoggedIn = createSelector(
    selectAuthenticationState,
    authentication => authentication.isLoggedIn
);

// export const selectError = createSelector(
//     selectAuthenticationState,
//     authentication => authentication.error
// );
