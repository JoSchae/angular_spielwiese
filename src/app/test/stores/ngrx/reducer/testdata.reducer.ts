import { createReducer, on, Action } from "@ngrx/store";
import { initialTestDataState, ITestDataState } from '../states/testdata.state';
import * as testDataActions from '../actions/testdata.actions';

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
