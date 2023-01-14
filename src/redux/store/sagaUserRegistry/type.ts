import {SignInProps} from "../../../components/common/commonForm/types";

export const signInRequest = (payload: SignInProps) => ({
    type: SIGNIN_REQUEST,
    payload: payload
})

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';