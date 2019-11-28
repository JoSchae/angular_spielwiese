import { IUser } from 'src/app/_models/user.interface';

export interface IUsersState {
    users: IUser[];
}

export const initialUsersState: IUsersState = {
    users: []
};
