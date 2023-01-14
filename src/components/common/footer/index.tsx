import React from "react";
import {FooterWrap, Rights, FooterHomeBtn} from './style';
import Logo from "../../../other/aside/Pixema.svg";
import {Switcher} from "../../../other/theme";
import {useNavigate} from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate()
    return (
        <FooterWrap>
                <FooterHomeBtn onClick={() => {
                    navigate(`/`)
                }}>
                    <img src={Logo} alt="Cinema Logo"/>
                </FooterHomeBtn>
                <Rights>© All Rights Reserved</Rights>
                <Switcher />
        </FooterWrap>
    )
}