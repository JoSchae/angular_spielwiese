import { ErrorActions, EErrorAction } from '../actions/error.actions';

export const errorReducers = (
    state: any = null,
    action: ErrorActions
): any => {
    switch (action.type) {
        case EErrorAction.AddError: {
            return action.payload;
        }
        default: {
            return action.payload;
        }
    }
}
