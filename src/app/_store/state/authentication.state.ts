import { IAuthentication } from 'src/app/_models/authentication.interface';
import { IError } from 'src/app/_models/error.interface';

export interface IAuthenticationState {
    authentication: IAuthentication;
    error: IError;
}

export const initialAuthenticationState: IAuthenticationState = {
    authentication: {
        token: undefined,
        isLoggedIn: false
    },
    error: null
};
