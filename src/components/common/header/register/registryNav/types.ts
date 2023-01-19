import React, {Dispatch, SetStateAction} from "react";

export type NavProps = {
    open: boolean;
}

export type OnclickType = {
    setLoginState: Dispatch<SetStateAction<boolean>>,
    loginState: boolean
}