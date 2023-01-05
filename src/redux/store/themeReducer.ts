import {COLORS} from "../../styles";
import {ActionThemeType, StateType} from "../../components/theme/types";


const defaultState: StateType = {
    background: `${COLORS.blackBg}`,
}

export const themeReducer = (state = defaultState, action :ActionThemeType) => {

    switch (action.type) {
        case "DARK_THEME":
            return {...state, background: `${COLORS.blackBg}`}
        case "LIGHT_THEME":
            return {...state, background: `${COLORS.whiteContext}`}
        default:
            return {...state}
    }
};

