import { uniqueId } from "lodash";
import React from "react";
import { MdInfo } from "react-icons/md";
import * as S from "./styled";
import { SelectProps } from "./types";

export const Select = (props: SelectProps) => {
    const borderColor = props.validationError ? "danger" : props.validationSuccess ? "success" : null;

    const elementUniqueId = uniqueId(props.name);

    return (
        <S.MainWrapper>
            <S.InputLabel htmlFor={elementUniqueId}>{props.label}</S.InputLabel>
            <S.SelectComponent
                {...props}
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
