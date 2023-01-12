export type SignUpError = {
    username: Array<string>
    email: Array<string>
    password: Array<string>
}

export type SignUpPayload = {
    username: string
    email: string
    password: string
}

export type SignUpSuccessPayload = {
    username: string
    email: string
    id: number
}

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";