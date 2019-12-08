import { testDataReducers, selectAllTestData, selectSpecificTestData, selectTestDataById } from './testdata.reducer';
import { initialTestDataState } from '../states/testdata.state';
import * as testDataActions from '../actions/testdata.actions';

const data = [
    {
        id: 0,
        vorname: 'johannes',
        nachname: 'schäfer',
        alter: 29,
        hobbies: ['zocken', 'coden', 'lesen', 'kochen', 'flachwitze']
    }
];

const specificData = {
    id: 0,
    vorname: 'johannes',
    nachname: 'schäfer',
    alter: 29,
    hobbies: ['zocken', 'coden', 'lesen', 'kochen', 'flachwitze']
};

describe('testdata reducer', () => {

    it('should return the default state', () => {
        const action = { type: 'NOOP' } as any;
        const result = testDataReducers(undefined, action);
        expect(result).toBe(initialTestDataState);
    });

    it('should return new state with all testdata', () => {

        const resultState = {
            data,
            specificData: null
        };

        const action = testDataActions.getAllTestDataSuccess({data});
        const result = testDataReducers(initialTestDataState, action);
        expect(result).toEqual(resultState);
    });

    it('should return a new state with spefic testdata', () => {
        const resultState = {
            data: [],
            specificData
        };

        const action = testDataActions.setSpecificTestData({ specificData });
        const result = testDataReducers(initialTestDataState, action);
        expect(result).toEqual(resultState);
    })

});

describe('testdata selectors', () => {

    it('should select all testdata', () => {
        const currentState = {
            data,
            specificData: null
        };
        expect(selectAllTestData.projector(currentState)).toEqual(data);
    });

    it('should select specific testdata', () => {
        const currentState = {
            data: [],
            specificData
        };
        expect(selectSpecificTestData.projector(currentState)).toEqual(currentState.specificData);
    });

    it('should select testdata by id', () => {
        const currentState = {
            data,
            specificData: null
        };
        const id = 0;
        expect(selectTestDataById.projector(currentState, id)).toEqual(data.find(val => val.id === id));
    });

});
