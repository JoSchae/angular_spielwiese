import { createReducer, on, Action } from '@ngrx/store';
import * as errorActions from '../actions/error.actions';

const errorReducerInternal = createReducer(
    null,
    on(
        errorActions.addError, (state, { payload }) => ({
            payload
        })
    )
);

export function errorReducer(
    state: any | undefined,
    action: Action
) {
    return errorReducerInternal(state, action);
}
