import React from "react";
import {HeaderWrap} from './style';
import {SearchInput} from "./search";
import {UserBar} from "./user";

export const Header = () => {

    return (
        <HeaderWrap>
            <SearchInput />
            <UserBar />
        </HeaderWrap>
    )
}