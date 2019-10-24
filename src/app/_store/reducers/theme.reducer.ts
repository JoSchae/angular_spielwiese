import { initialThemeState, IThemeState } from '../state/theme.state';
import { ThemeActions, EThemeActions } from '../actions/theme.actions';

export const themeReducers = (
    state = initialThemeState,
    action: ThemeActions
): IThemeState => {
    switch (action.type) {
        case EThemeActions.GetThemeSuccess: {
            return {
                ...state,
                selectedTheme: action.payload
            };
        }
        case EThemeActions.GetThemesSuccess: {
            return {
                ...state,
                themes: action.payload
            };
        }
        case EThemeActions.SetThemePropertiesSuccess: {
            return {
                ...state,
                themes: action.payload
            };
        }

        default: {
            return state;
        }
    }
};
