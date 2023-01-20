import React, {useState} from 'react';
import {
    FormContent,
    FormBox,
    FormName,
    ErrorMessage,
    SubmitBtn,
    FormQuery
} from '../../../components/common/commonForm/style';
import {RegistryProps} from "../../../components/common/commonForm/types";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signUpRequest} from "../../../redux/store/authReducer/action";
import {userStateMessage} from "../../../redux/others/stateMessage";
import {CommonInput} from "../../../components/common/commonForm/commonInput";
import {validateEmail, validatePassword, validateUserName} from "../../../utils/validation";


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
                    validate={validateUserName}
                    onChange={handleChange}
                />
                <CommonInput
                    type={'email'}
                    name={'email'}
                    placeholder={'Enter your email'}
                    value={value.email}
                    error={errorEmail}
                    errorChange={setErrEmail}
                    validate={validateEmail}
                    onChange={handleChange}
                />
                <CommonInput
                    type={'password'}
                    name={'password'}
                    placeholder={'Enter your password'}
                    value={value.password}
                    error={errorPswrd}
                    errorChange={setErrPswrd}
                    validate={validatePassword}
                    onChange={handleChange}
                />
                <CommonInput
                    type={'password'}
                    name={'passwordConfirm'}
                    placeholder={'Re-enter your password'}
                    value={value.passwordConfirm}
                    error={errorPswrdConf}
                    errorChange={setErrPswrdConf}
                    validate={validatePassword}
                    onChange={handleChange}
                />

                {compare && <ErrorMessage>Passwords do not match</ErrorMessage>}
                    <SubmitBtn onClick={() => {
                        DataForm()
                        comparePassword()
                    }}>
                        SIGN UP
                    </SubmitBtn>

                <FormQuery>
                    Already have an account?
                    Please <span onClick={() => {
                    navigate(`/signIn`)
                }}>
                SIGN IN</span>
                </FormQuery>

            </FormBox>
        </FormContent>
    );
};
