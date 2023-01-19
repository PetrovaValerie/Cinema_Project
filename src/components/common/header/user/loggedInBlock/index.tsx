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
                            {/*<span>VP</span>*/}
                            <span>
                                {user[0].toUpperCase()}
                            </span>
                        </UserAbbr>
                        {/*<p>Valerie Petrova</p>*/}
                        <p>{user.slice(1, 8)}</p>
                    </UserWrap>
                }
            </>
    )
}