import React, {FC} from "react";
import {UserWrap, UserAbbr} from './style';
import {OnclickType} from "../../register/registryNav/types";
import {useUserSelector} from "../../../../../redux/store/rootReducer";


export const LoggedIn:FC<OnclickType> = ({loginState, setLoginState}) => {

    const user = useUserSelector(state => state.authReducer.user?.username)

    const changeLoginState = () => {
        setLoginState(state => !state)
    }

    return (
            <>
                {user?.length &&
                    <UserWrap onClick={changeLoginState}>
                        <UserAbbr>
                            <span>
                                {user[0].toUpperCase()}
                            </span>
                        </UserAbbr>
                        <p>{user.slice(0, 8)}</p>
                    </UserWrap>
                }
            </>
    )
}