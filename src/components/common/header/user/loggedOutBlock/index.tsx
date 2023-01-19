import React from 'react';
import {IconUser} from "./style";
import {useNavigate} from "react-router-dom";
import { UserWrap } from '../loggedInBlock/style';

export const LoggedOut = () => {
    const navigation = useNavigate()

    return (
        <UserWrap>
        {/*<UserWrap onClick={() => navigation('signIn')}>*/}
            <IconUser></IconUser>
        </UserWrap>
    );
};
