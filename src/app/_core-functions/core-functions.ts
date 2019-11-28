import { IUserHttp } from '../_models/http/user-http.interface';
import { IUser } from '../_models/user.interface';
import { IError } from '../_models/error.interface';

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
