import { ITestData } from 'src/app/test/services/test.service';

export interface ITestDataState {
    data: ITestData[];
    specificData: ITestData;
}

export const initialTestDataState: ITestDataState = {
    data: [],
    specificData: null
};
