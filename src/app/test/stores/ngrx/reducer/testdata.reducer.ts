import { createReducer, on, Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { initialTestDataState, ITestDataState } from '../states/testdata.state';
import * as testDataActions from '../actions/testdata.actions';

// REDUCERS

const testDataReducerInternal = createReducer(
    initialTestDataState,
    on(testDataActions.getAllTestDataSuccess, (state, { data }) => ({
        ...state,
        data
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
    (state: ITestDataState, props: number) => state.data[props]
);

export const selectors = {
    selectTestDataState,
    selectAllTestData,
    selectSpecificTestData
};
