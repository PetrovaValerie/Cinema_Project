import {Dispatch, SetStateAction} from "react";

export const userStateMessage = (changeState:Dispatch<SetStateAction<boolean>>) => {

    setTimeout( () => changeState(false), 1000);
    return
}