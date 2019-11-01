import { Action } from '@ngrx/store';

export enum EErrorAction {
    AddError = '[Error] Add Error'
}

export class AddError implements Action {
    public readonly type = EErrorAction.AddError;
    constructor(public payload: any) { }
}

export type ErrorActions = AddError;
