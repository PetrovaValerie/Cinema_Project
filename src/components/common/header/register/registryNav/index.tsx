import React from "react";
import {useNavigate} from "react-router-dom";
import { UserBar } from "../../user";
import { Ul, NavlistItem } from "./style";
import {NavProps} from "./types";

export const RegistryNav = ({open}: NavProps) => {

    const navigate = useNavigate()

    return (
                    <Ul open = {open}>
                        <NavlistItem>
                            <UserBar />
                        </NavlistItem>

                        <NavlistItem onClick={() => {
                                navigate("/")
                            }}>
                            HOME
                        </NavlistItem>

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

                        <NavlistItem>
                            LOG OUT
                        </NavlistItem>

                    </Ul>
    )
}