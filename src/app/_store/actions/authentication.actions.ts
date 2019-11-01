import { Action } from '@ngrx/store';
import { IAuthentication } from 'src/app/_models/authentication.interface';

export enum EAuthenticationActions {
    GetAuthentication = '[Authentication] Get Authentication',
    GetAuthenticationSuccess = '[Authentication] Get Authentication Success',
}

export class GetAuthentication implements Action {
    public readonly type = EAuthenticationActions.GetAuthentication;
}

export class GetAuthenticationSuccess implements Action {
    public readonly type = EAuthenticationActions.GetAuthenticationSuccess;
    constructor(public payload: IAuthentication) { }
}

export type AuthenticationActions = GetAuthentication | GetAuthenticationSuccess;
