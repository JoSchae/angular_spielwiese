import { IError } from '../_models/error.interface';
import { ITestData, ITestDataHttp } from '../test/services/test.service';

export function mapError(error: Error): IError {
    const mappedError = {
        msg: error.message,
        name: error.name,
        stack: error.stack
    };
    return mappedError;
}

export function mapTestData(response: ITestDataHttp): ITestData[] {
    return response.data.map<ITestData>(data => {
        return {
            id: data.id,
            vorname: data.vorname,
            nachname: data.nachname,
            alter: data.alter,
            hobbies: data.hobbies.split(',')
        };
    });
}

export function isCorrectToken(token: string) {
    return token.match(/([^& %]){10}\.([^& %]{32})\.([^& %]{10})\w/g);
}
