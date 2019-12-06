import { ITestData } from 'src/app/test/services/test.service';

// STATE

export interface ITestDataState {
    data: ITestData[];
}

export const initialTestDataState: ITestDataState = {
    data: []
};
