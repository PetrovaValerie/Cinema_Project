import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Ul, NavlistItem } from "./style";
import {NavProps} from "./types";
import {UserBar} from "../../user";
import {useDispatch} from "react-redux";

export const RegistryNav = ({open}: NavProps) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginState, setLoginState] = useState(false)
    return (
                    <Ul open = {open}>

                        <NavlistItem>
                            <UserBar loginState={loginState} setLoginState={setLoginState}/>
                        </NavlistItem>

                        {/*<NavlistItem onClick={() => {*/}
                        {/*        navigate("/")*/}
                        {/*    }}>*/}
                        {/*    HOME*/}
                        {/*</NavlistItem>*/}

                        <NavlistItem onClick={() => {
                            navigate("/signUp")
                        }}>
                            SIGN UP
                        </NavlistItem>

                        <NavlistItem onClick={() => {
                            navigate("/signIn")
                        }}>
                            SIGN IN
                        </NavlistItem>

                        <NavlistItem onClick={() => {
                            setLoginState(false)
                            dispatch({type:"REGISTER_SUCCESS", payload: null})
                           }}>
                            LOG OUT
                        </NavlistItem>

                    </Ul>
    )
}