import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as T from "../../styles/typography";

import { MdInfo } from "react-icons/md";

import classnames from "classnames";

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .input--focused {
        border: solid 2px var(--secondary);
        box-shadow: 0px 0px 8px rgba(0, 7, 46, 0.2);
    }
    .input--error {
        border: solid 2px var(--danger);
        box-shadow: 0px 0px 8px rgba(0, 7, 46, 0.2);
    }
    .input--success {
        border: solid 2px var(--success);
        box-shadow: 0px 0px 8px rgba(0, 7, 46, 0.2);
    }
    .input__full-width {
        width: 100%;
    }
`;
const InputLabel = styled.label`
    ${T.FormLabel};
    padding-bottom: 5px;
`
const InputWrapper = styled.div`
    display: flex;
    width: 50%;
    border: solid 2px var(--text-body);
    border-radius: 4px;
    background: #fcfcfc;
    transition: 150ms ease-in-out;
`;
const InputComponent = styled.input`
    ${T.FormInput};
    padding: 14px 18px;
    width: 100%;
    border: none;
    border-color: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        ${T.PlaceholderFormInput};
    }
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 16px;

    svg {
        color: var(--text-body);
        cursor: pointer;
        width: 28px;
        height: 28px;
    }
`;

const TextField = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    console.log("Estou aqui")

    const inputClasses = classnames({
        "input--focused": isFocused === true,
        "input__full-width": props.fullWidth,
    });

    return (
        <MainWrapper>
        <InputLabel for={props.name}>{props.label}</InputLabel>
            <InputWrapper className={inputClasses}>
                <InputComponent
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    autoComplete={props.autoComplete}
                    disabled={props.disabled}
                    value={props.value}
                    onFocus={
                        (() => {
                            setIsFocused(true);
                        })
                    }
                    onBlur={
                        (() => {
                            setIsFocused(false);
                        })
                    }
                />
                {props.icon ? (
                    <IconWrapper>  
                        {props.icon ===  'info' ? <MdInfo /> : null}
                    </IconWrapper>
                ) : null}
            </InputWrapper>
        </MainWrapper>
    );
};

TextField.propTypes = {
    name: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
    type: Proptypes.oneOf(["password", "email"]),
    placeholder: Proptypes.string,
    autoComplete: Proptypes.oneOf(["on", "off"]),
    disabled: Proptypes.bool,
    icon: Proptypes.oneOf(["info"]),
    onFocus: Proptypes.any,
    onBlur: Proptypes.any,
    value: Proptypes.any,
    fullWidth: Proptypes.bool,
};

export default TextField;
