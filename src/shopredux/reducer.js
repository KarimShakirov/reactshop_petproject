import {CHANGE_THEME, LIGHT, DARK} from "./constans";


const initalState = {
    theme: {
        currentTheme : LIGHT
    }
}

export default function themeReducer(state=initalState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            switch (state.theme.currentTheme) {
                case DARK:
                    return {...state, theme: {currentTheme: LIGHT}}
                case LIGHT:
                    return {...state, theme: {currentTheme: DARK}}
            }
    }
    return state
}