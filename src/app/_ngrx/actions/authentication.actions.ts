import { createAction, props } from '@ngrx/store';
import { IAuthentication } from 'src/app/_models/authentication.interface';
import { IError } from 'src/app/_models/error.interface';

export const getAuthentication = createAction('[Authentication] Get Authentication');

export const getAuthenticationSuccess = createAction(
    '[Authentication] Get Authentication Success',
    props<{ payload: IAuthentication }>()
);

export const getAuthenticationFailure = createAction(
    '[Authentication] Get Authentication Failure',
    props<{ payload: IError }>()
);
