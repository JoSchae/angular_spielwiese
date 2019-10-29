import { Action } from '@ngrx/store';
import { IAuthentication } from 'src/app/_models/authentication.interface';

export enum EAuthenticationActions {
    GetAuthentication = '[Authentication] Get Authentication',
    GetAuthenticationSuccess = '[Authentication] Get Authentication Success',
    GetIsLoggedIn = '[Authentication] Get isLoggedIn',
    GetIsLoggedInSuccess = '[Authentication] Get isLoggedIn Success'
}

export class GetAuthentication implements Action {
    public readonly type = EAuthenticationActions.GetAuthentication;
}

export class GetAuthenticationSuccess implements Action {
    public readonly type = EAuthenticationActions.GetAuthenticationSuccess;
    constructor(public payload: IAuthentication) { }
}

export class GetIsLoggedIn implements Action {
    public readonly type = EAuthenticationActions.GetIsLoggedIn;
    constructor(public payload: string) { }
}

export class GetIsLoggedInSuccess implements Action {
    public readonly type = EAuthenticationActions.GetIsLoggedInSuccess;
    constructor(public payload: boolean) { }
}

export type AuthenticationActions = GetAuthentication | GetAuthenticationSuccess | GetIsLoggedIn | GetIsLoggedInSuccess;
