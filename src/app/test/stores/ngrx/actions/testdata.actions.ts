import { createAction, props } from '@ngrx/store';
import { ITestData } from 'src/app/test/services/test.service';

export const GETAllTestData = createAction('[Test ngrx] Get all TestData');

export const GETAllTestDataSuccess = createAction(
    '[Test ngrx] Get all TestData Success',
    props<{ data: ITestData[] }>()
);

export const setSpecificTestData = createAction(
    '[Test ngrx] Set specific TestData Success',
    props<{ specificData: ITestData }>()
);
