import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUsersState } from '../states/users.state';

export const selectUsersState = createFeatureSelector<IUsersState>('users');

export const selectUsers = createSelector(
    selectUsersState,
    users => users.users
    );
