import { IError } from '../_models/error.interface';


export function mapError(error: Error): IError {
    const mappedError = {
        msg: error.message,
        name: error.name,
        stack: error.stack
    };
    return mappedError;
}

/**
 * Returns true if the given string hast the correct regex-pattern, false otherwise.
 * @param token a token-string
 */
export function isCorrectTokenPattern(token: string) {
    return token.match(/([^& %]){10}\.([^& %]{32})\.([^& %]{10})\w/g);
}
