import { IAuthentication } from 'src/app/_models/authentication.interface';
import { IError } from 'src/app/_models/error.interface';

export interface IAuthenticationState {
    token: string;
    isLoggedIn: boolean;
}

export const initialAuthenticationState: IAuthenticationState = {
        token: null,
        isLoggedIn: false
};
