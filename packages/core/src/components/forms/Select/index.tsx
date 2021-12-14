import uniqueId from "lodash/uniqueId";
import React, { ChangeEvent } from "react";
import { MdInfo } from "react-icons/md";
import * as S from "./styled";
import { SelectProps } from "./types";

export { Option } from "./Option";

export const Select = ({ onFocus, onBlur, onChange, ...props }: SelectProps) => {
    const borderColor = props.validationError ? "danger" : props.validationSuccess ? "success" : null;

    const elementUniqueId = uniqueId(props.name);

    const handleFocus = () => {
        onFocus && onFocus();
    };

    const handleBlur = () => {
        onBlur && onBlur();
    };

    const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(target.value);
    };

    return (
        <S.MainWrapper>
            <S.InputLabel htmlFor={elementUniqueId}>{props.label}</S.InputLabel>
            <S.SelectComponent
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                id={elementUniqueId}
                aria-label={props.label}
                aria-required={props.required}
                name={props.name}
                placeholder={props.placeholder}
                data-bordercolor={borderColor}
            >
                {props.children}
            </S.SelectComponent>
            <S.InputValidationContainer>
                {props.validationMessage ? (
                    <React.Fragment>
                        <MdInfo />
                        <S.InputValidationMessage>{props.validationMessage}</S.InputValidationMessage>
                    </React.Fragment>
                ) : null}
            </S.InputValidationContainer>
        </S.MainWrapper>
    );
};

export default Select;
