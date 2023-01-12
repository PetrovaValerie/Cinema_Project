import React, {useState} from "react";
import {CheckBoxWrapper, IconWrap} from "./style"
import {useDispatch} from "react-redux";
import {LightIcon, DarkIcon} from "./icons";

export const Switcher = () => {

    const [state, setState] = useState(false);
    const dispatch = useDispatch();

    const selectDarkTheme = () => {
        dispatch({type:"DARK_THEME"})
    }

    const selectLightTheme = () => {
        dispatch({type:"LIGHT_THEME"})
    }
    return (
        <CheckBoxWrapper>
            <IconWrap
                onClick={() => {
                    setState(false)
                    state && selectDarkTheme()}}
                    strokes={state}><DarkIcon/>
            </IconWrap>
            <IconWrap
                onClick={() => {
                    setState(true)
                    !state && selectLightTheme()}}
                    strokes={!state}><LightIcon/>
            </IconWrap>
        </CheckBoxWrapper>
    )
}