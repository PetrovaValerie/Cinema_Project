import React, {FC} from "react";
import {UserWrap, UserAbbr} from './loggedInBlock/style';
import {OnclickType} from "../register/registryNav/types";
import { useUserSelector } from "../../../../redux/store/rootReducer";
import {LoggedIn} from "./loggedInBlock";
import { LoggedOut } from "./loggedOutBlock";

export const UserBar:FC<OnclickType> = ({loginState, setLoginState}) => {

    const user = useUserSelector(state => state.authReducer.user?.username)

    return (
            <>
                {user?.length ? <LoggedIn loginState={loginState} setLoginState={setLoginState}/> : <LoggedOut/>}
            </>
    )
}