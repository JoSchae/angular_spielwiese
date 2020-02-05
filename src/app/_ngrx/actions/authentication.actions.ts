import { createAction, props } from '@ngrx/store';
import { IAuthentication } from 'src/app/_models/authentication.interface';
import { IError } from 'src/app/_models/error.interface';
import { IAuthenticationState } from '../state/authentication.state';

export const getAuthentication = createAction('[Authentication] Get Authentication');

export const getAuthenticationSuccess = createAction(
    '[Authentication] Get Authentication Success',
    props<{ payload: IAuthenticationState }>()
);

export const getAuthenticationFailure = createAction(
    '[Authentication] Get Authentication Failure',
    props<{ payload: IError }>()
);

export const logout = createAction(
    '[Authentication] Remove authentication state'
);
