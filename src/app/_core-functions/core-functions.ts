import { IUserHttp } from '../_models/http/user-http.interface';
import { IUser } from '../_models/user.interface';
import { IError } from '../_models/error.interface';
import { TestData } from '../test/services/test.service';

export function mapUsers(response: IUserHttp): IUser[] {
    const mappedUsers = response.users.map<IUser>(user => {
        return {
            vorname: user.vorname,
            nachname: user.nachname,
            alter: user.alter,
            hobbies: user.hobbies.split(',')
        };
    });
    return mappedUsers;
}

export function mapError(error: Error): IError {
    const mappedError = {
        msg: error.message,
        name: error.name,
        stack: error.stack
    };
    return mappedError;
}

export function mapTestData(response: { data: TestData[] }): TestData[] | {} {
    const mappedData = {};
    console.error(response)
    if (mappedData['data']) {
        return response.data.map<any>(data => {
            return {
                vorname: data.vorname,
                nachname: data.nachname,
                alter: data.alter,
                hobbies: data.hobbies
            };
        });
    }
    return mappedData;
}
