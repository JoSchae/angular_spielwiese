import { IAuthentication } from 'src/app/_models/authentication.interface';

export interface IAuthenticationState {
    authentication: IAuthentication;
}

export const initialAuthenticationState: IAuthenticationState = {
        authentication: {
            jwtToken: null,
            isLoggedIn: false
        }
};
