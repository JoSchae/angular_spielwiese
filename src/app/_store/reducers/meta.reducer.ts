import { ActionReducer, MetaReducer } from '@ngrx/store';
import { ActivationEnd } from '@angular/router';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        // we really don't need every routing action
        if (!action.type.includes('router-store')) {
            console.log('state', state);
            console.log('action', action);
        }

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [debug];
