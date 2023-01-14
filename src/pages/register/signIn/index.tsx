import React, {useState} from 'react';
import {FormContent, FormBox, FormName, SubmitBtn, FormQuery} from "../../../components/common/commonForm/style"
import {SignInProps} from "../../../components/common/commonForm/types";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signInRequest} from "../../../redux/store/sagaUserRegistry/type";
import {CommonInput} from "../../../components/common/commonForm/commonInput";


export const SignInPage = () => {

    const [value, setValue] = useState<SignInProps>({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: SignInProps) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    const  dispatch = useDispatch();

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const DataForm = () => {

        if(errorEmail === 'true' && errorPassword === 'true') {
            console.log(value)
            dispatch(signInRequest(value))
            navigate('/')
        }
    }

    return (
        <FormContent>
            <FormBox>
                <FormName>SIGN IN</FormName>
                <CommonInput
                    type={'email'}
                    name={'email'}
                    placeholder={'Enter your e-mail'}
                    value={value.email}
                    error={errorEmail}
                    errorChange={setErrorEmail}
                    // validate={validateEmail}
                    onChange={handleChange}
                />
                <CommonInput
                    type={'password'}
                    name={'password'}
                    placeholder={'Enter your password'}
                    value={value.password}
                    error={errorPassword}
                    errorChange={setErrorPassword}
                    // validate={validatePassword}
                    onChange={handleChange}
                />
                <SubmitBtn onClick={DataForm}>SIGN IN</SubmitBtn>

                <FormQuery>
                    Don't have an account yet?
                    Please <span onClick={() => {
                    navigate(`/signUp`)
                }}>
                SIGN UP</span>
                </FormQuery>

            </FormBox>
        </FormContent>
    );
};
