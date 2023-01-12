import React, {useState} from "react";
import {HeaderWrap} from './style';
import {SearchInput} from "./search";
import {BtnRow} from "./btnRow";
import {UserBar} from "./user";
import {RegBtn} from "./register/registerBtn";

export const Header = () => {
    const [stateSearch, setStateSearch] = useState(false)

    const params = new URLSearchParams(document.location.search);
    const keywordParams = params.get('keywordValue') || ''
    const [itemSearch, setItemSearch] = useState(keywordParams)

    const submitBtnItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setItemSearch(e.target.value)
    }

    return (
        <HeaderWrap>
            <BtnRow />
            <SearchInput setStateSearch={setStateSearch}
                         itemSearch={itemSearch}
                         submitBtnValue={submitBtnItem}
            />
            <RegBtn />
        </HeaderWrap>
    )
}