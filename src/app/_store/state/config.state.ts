import { IConfig } from 'src/app/_models/config.interface';

export interface IConfigState {
    config: IConfig;
}

export const initialConfigState: IConfigState = {
    config: null
};
