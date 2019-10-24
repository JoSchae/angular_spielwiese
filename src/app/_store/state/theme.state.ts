import { ITheme } from 'src/app/_models/theme.interface';

export interface IThemeState {
    themes: ITheme[];
    selectedTheme: ITheme;
}

export const initialThemeState: IThemeState = {
    themes: [],
    selectedTheme: {
        name: 'default',
        properties: [
            {
                property: 'title',
                value: 'blue'
            },
            {
                property: 'background-color',
                value: 'orange'
            }
        ]
    }
};
