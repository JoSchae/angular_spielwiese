import { ITestData } from 'src/app/test/services/test.service';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// STATE

export interface ITestDataState {
    data: ITestData[];
}

export const initialTestDataState = {
    data: undefined
};

// SELECTORS

export const selectTestDataState = createFeatureSelector<ITestDataState>('data');

export const selectAllTestData = createSelector(
    selectTestDataState,
    (state: ITestDataState) => state.data
);

export const selectSpecificTestData = createSelector(
    selectTestDataState,
    (state: ITestDataState, props: number) => state.data[props]
);

export const selectors = {
    selectTestDataState,
    selectAllTestData,
    selectSpecificTestData
}
