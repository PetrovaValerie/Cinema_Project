import {applyMiddleware, combineReducers, createStore} from 'redux';
import {themeReducer} from "./themeReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export type StateType = {
    background?: string,
    color?: string,
}

export type PayloadType = {
    background: string,
    color: string
}

export type ThemeReducerType = {
    themeReducer: PayloadType
}


export const useThemeSelector: TypedUseSelectorHook<ThemeReducerType> = useSelector;

export const rootReducer = combineReducers({
    themeReducer,
})

export const store = createStore(rootReducer);