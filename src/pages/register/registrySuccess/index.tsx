import React from 'react';
import {SuccessContainer, SuccessTxt} from "./style";
import {useNavigate} from "react-router-dom";

export const SuccessRegPage = () => {
    const navigate = useNavigate();

    return (
        <SuccessContainer>
            <SuccessTxt>Congratulations!</SuccessTxt>
            <SuccessTxt>You've been registered!</SuccessTxt>
            <SuccessTxt onClick={() => {
                navigate("/")
            }}>
                Get back to the Homepage
            </SuccessTxt>
        </SuccessContainer>
    );
};
