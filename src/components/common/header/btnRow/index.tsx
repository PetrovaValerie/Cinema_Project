import React from "react";
import {HeaderBtnRow, NavBtn} from './style';
import Logo from "../../../../other/aside/Pixema.svg";
import {createSearchParams, useNavigate} from "react-router-dom";

export const BtnRow = () => {
    const navigate = useNavigate()

    return (
            <HeaderBtnRow>
                <NavBtn onClick={() => {
                    navigate(`/`)
                }}>
                    <img src={Logo} alt="Cinema Logo"/>
                </NavBtn>
                <NavBtn onClick={() => {
                    navigate({
                        pathname: "movies",
                        search: `?${createSearchParams({
                            type: 'FILM'
                        })}`
                    })
                }}>
                    MOVIES
                </NavBtn>
                <NavBtn onClick={() => {
                    navigate({
                        pathname: "movies",
                        search: `?${createSearchParams({
                            type: 'TV_SERIES'
                        })}`
                    })
                }}>
                    TV SERIES
                </NavBtn>
            </HeaderBtnRow>
    )
}