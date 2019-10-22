import { ITheme } from 'src/app/_models/theme.interface';

export interface IThemeState {
    themes: ITheme[];
    activeTheme: ITheme;
}

export const initialThemeState: IThemeState = {
    themes: null,
    activeTheme: null
};
