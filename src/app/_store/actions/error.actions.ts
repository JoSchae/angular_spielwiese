import { createAction, props } from '@ngrx/store';

export const addError = createAction(
    '[Error] Add Error',
    props<{ payload: any }>()
);
