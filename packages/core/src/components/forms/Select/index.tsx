import uniqueId from "lodash/uniqueId";
import React, { ChangeEvent } from "react";
import { MdInfo } from "react-icons/md";
import * as S from "./styled";
import { SelectProps } from "./types";

export { Option } from "./Option";

export const Select = ({
    onFocus,
    onBlur,
    onChange,
    validationError,
    validationSuccess,
    validationMessage,
    children,
    placeholder,
    label,
    name,
    value,
    required = false,
    borderRadius = "sm",
    borderPosition = "all",
    borderType = "default",
    borderColor = "darkTint",
}: SelectProps) => {
    const borderFinalColor = validationError ? "danger" : validationSuccess ? "success" : borderColor;

    const elementUniqueId = uniqueId(name);

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
            <S.InputLabel htmlFor={elementUniqueId}>{label}</S.InputLabel>
            <S.SelectComponent
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                id={elementUniqueId}
                aria-label={label}
                aria-required={required}
                name={name}
                placeholder={placeholder}
                data-bordercolor={borderFinalColor}
                data-borderradius={borderRadius}
                data-bordertype={borderType}
                data-borderposition={borderPosition}
            >
                {children}
            </S.SelectComponent>
            <S.InputValidationContainer>
                {validationMessage ? (
                    <React.Fragment>
                        <MdInfo />
                        <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                    </React.Fragment>
                ) : null}
            </S.InputValidationContainer>
        </S.MainWrapper>
    );
};

export default Select;
