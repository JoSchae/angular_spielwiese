import { createAction, props } from '@ngrx/store';
import { IAuthentication } from 'src/app/_models/authentication.interface';

export const getAuthentication = createAction('[Authentication] Get Authentication');

export const getAuthenticationSuccess = createAction(
    '[Authentication] Get Authentication Success',
    props<{ payload: IAuthentication }>()
);
