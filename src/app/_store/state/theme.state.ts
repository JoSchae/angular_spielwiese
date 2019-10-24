import { ITheme } from 'src/app/_models/theme.interface';

export interface IThemeState {
    themes: ITheme[];
    selectedTheme: ITheme;
}

export const initialThemeState: IThemeState = {
    themes: [],
    selectedTheme:  null

    // {
    //     "name": "default",
    //     "properties": [{
    //         --override-title: "blue",
    //         --override-background-color: "orange"
    //     }]
    // }
};
