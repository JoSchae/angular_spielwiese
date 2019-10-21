import { IConfig } from 'src/app/_interfaces/config';

export interface IConfigState {
    config: IConfig;
}

export const initialConfigState: IConfigState = {
    config: null
};
