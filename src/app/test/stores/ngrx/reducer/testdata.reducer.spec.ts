import { testDataReducers } from './testdata.reducer';
import { initialTestDataState } from '../states/testdata.state';
import { getAllTestDataSuccess } from '../actions/testdata.actions';
import { props } from '@ngrx/store';

describe('testdata reducer', () => {

    it('should return the default state', () => {
        const action = { type: 'NOOP' } as any;
        const result = testDataReducers(undefined, action);
        expect(result).toBe(initialTestDataState);
    });

    it('should return new state with all testdata', () => {
        const data = {
            data: [
                {
                    vorname: 'johannes',
                    nachname: 'schäfer',
                    alter: 29,
                    hobbies: ['zocken', 'coden', 'lesen', 'kochen', 'flachwitze']
                }
            ]
        };
        const action = getAllTestDataSuccess(data);
        const result = testDataReducers(initialTestDataState, action);
        expect(result).toEqual(data);
    });

});
