import React from 'react';
import {ErrorMessageBlock} from "./style";
import {Input, InputFormBlock} from "./style";
import {CommonInputTypes } from './types';

export const CommonInput = (props: CommonInputTypes) => {

    // const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     props.errorChange(props.validate(e.target.value))
    // }

    return (
        <InputFormBlock>
            <Input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                // onBlur={validateValue}
                error={props.error}>
            </Input>
            <ErrorMessageBlock>
                {props.error !== 'true' && <span>{props.error}</span>}
            </ErrorMessageBlock>

        </InputFormBlock>
    );
};
