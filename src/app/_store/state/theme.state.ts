import { ITheme } from 'src/app/_models/theme';

export interface IThemeState {
    themes: ITheme[];
    selectedTheme: ITheme;
}

export const initialThemeState: IThemeState = {
    themes: null,
    selectedTheme: null
};
