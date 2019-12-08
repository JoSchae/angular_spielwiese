import { createReducer, on, Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { initialTestDataState, ITestDataState } from '../states/testdata.state';
import * as testDataActions from '../actions/testdata.actions';
import { statement } from '@babel/template';

// REDUCERS

const testDataReducerInternal = createReducer(
    initialTestDataState,
    on(testDataActions.getAllTestDataSuccess, (state, { data }) => ({
        ...state,
        data,
    })),
    on(testDataActions.setSpecificTestData, (state, { specificData }) => ({
        ...state,
        specificData
    }))
);

export function testDataReducers(state: ITestDataState | undefined, action: Action) {
    return testDataReducerInternal(state, action);
}

// SELECTORS

export const selectTestDataState = createFeatureSelector<ITestDataState>('data');

export const selectAllTestData = createSelector(
    selectTestDataState,
    (state: ITestDataState) => state.data
);

export const selectSpecificTestData = createSelector(
    selectTestDataState,
    (state: ITestDataState) => state.specificData
);

export const selectTestDataById = createSelector(
    selectTestDataState,
    (state: ITestDataState, id: number) => state.data.find(data => data.id === id)
);

export const selectors = {
    selectTestDataState,
    selectAllTestData,
    selectSpecificTestData,
    selectTestDataById
};
