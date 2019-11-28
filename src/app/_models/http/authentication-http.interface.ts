import { IAuthentication } from '../authentication.interface';

export interface IAuthenticationHttp {
    authentication: {
        token: string;
        isLoggedIn: boolean;
    };
}
