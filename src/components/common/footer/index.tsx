import React from "react";
import {FooterWrap, FooterRow, Rights} from './style';
import {NavBtn} from "../header/btnRow/style";
import Logo from "../../../other/aside/Pixema.svg";
import {Switcher} from "../../../other/theme";
import {useNavigate} from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate()
    return (
        <FooterWrap>

            <FooterRow>
                <NavBtn onClick={() => {
                    navigate(`/`)
                }}>
                    <img src={Logo} alt="Cinema Logo"/>
                </NavBtn>
                <Rights>© All Rights Reserved</Rights>
            </FooterRow>

                <Switcher />
        </FooterWrap>
    )
}