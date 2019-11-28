import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/_models/user.interface';

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction(
    '[Users] Get Users Success',
    props<{ users: IUser[] }>()
);
