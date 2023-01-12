import React, {useState} from 'react';
import {FormContent, FormBox, FormName, ErrorMessage, SubmitBtn} from './style';
import {RegistryProps} from "./types";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signUpRequest} from "../../../redux/store/authReducer/action";
import {userStateMessage} from "../../../redux/others/stateMessage";
import {CommonInput} from "../../../components/common/commonInput";


export const SignUpPage = () => {

    const [value, setValue] = useState<RegistryProps>({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: RegistryProps) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errorEmail, setErrEmail] = useState('')
    const [errorUserName, setErrUserName] = useState('')
    const [errorPswrd, setErrPswrd] = useState('')
    const [errorPswrdConf, setErrPswrdConf] = useState('')

    const DataForm = () => {

        if (value.password === value.passwordConfirm
            && errorEmail === 'true'
            && errorUserName === 'true'
            && errorPswrd === 'true'
            && errorPswrdConf === 'true') {
            dispatch(signUpRequest(value))
            navigate('/success')
        }

    }
    const [compare, setCompare] = useState(false)

    const comparePassword = () => {
        if(value.password !== value.passwordConfirm) {
            setCompare(true)
            userStateMessage(setCompare)
        }
    }

    return (
        <FormContent>
            <FormBox >
                <FormName>SIGN UP</FormName>
                <CommonInput
                    type={'text'}
                    name={'username'}
                    placeholder={'Username'}
                    value={value.username}
                    error={errorUserName}
                    errorChange={setErrUserName}
                    onChange={handleChange}
                />
                <CommonInput
                    type={'email'}
                    name={'email'}
                    placeholder={'Enter your email'}
                    value={value.email}
                    error={errorUserName}
                    errorChange={setErrEmail}
                    onChange={handleChange}
                />
                <CommonInput
                    type={'password'}
                    name={'password'}
                    placeholder={'Enter your password'}
                    value={value.password}
                    error={errorPswrd}
                    errorChange={setErrPswrd}
                    onChange={handleChange}
                />
                <CommonInput
                    type={'password'}
                    name={'passwordConfirm'}
                    placeholder={'Re-enter your password'}
                    value={value.passwordConfirm}
                    error={errorPswrdConf}
                    errorChange={setErrPswrdConf}
                    onChange={handleChange}
                />

                {compare && <ErrorMessage>Passwords do not match</ErrorMessage>}
                <SubmitBtn onClick={() => {
                    DataForm()
                    comparePassword()
                }}>SIGN UP</SubmitBtn>
            </FormBox>
        </FormContent>
    );
};
