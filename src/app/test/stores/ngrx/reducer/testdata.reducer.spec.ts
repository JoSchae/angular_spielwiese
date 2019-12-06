import { testDataReducers, selectAllTestData, selectSpecificTestData } from './testdata.reducer';
import { initialTestDataState } from '../states/testdata.state';
import { getAllTestDataSuccess } from '../actions/testdata.actions';
<<<<<<< HEAD

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
=======
>>>>>>> 2effca0b7ffc45cbf450e763093b87f04306a7c5

describe('testdata reducer', () => {

    it('should return the default state', () => {
        const action = { type: 'NOOP' } as any;
        const result = testDataReducers(undefined, action);
        expect(result).toBe(initialTestDataState);
    });

    it('should return new state with all testdata', () => {

        const action = getAllTestDataSuccess(data);
        const result = testDataReducers(initialTestDataState, action);
        expect(result).toEqual(data);
    });

});

describe('testdata selectors', () => {

    it('should select all testdata', () => {
        expect(selectAllTestData.projector(data)).toEqual(data.data);
    });

    it('should select specific testdata', () => {
        expect(selectSpecificTestData.projector(0)).toBeTruthy()
    });
});
