import { createAction, props } from '@ngrx/store';
import { ITestData } from 'src/app/test/services/test.service';

export const getAllTestData = createAction('[Test ngrx] Get TestData');

export const getAllTestDataSuccess = createAction(
    '[Test ngrx] Get TestData Success',
    props<{ data: ITestData[] }>()
);
