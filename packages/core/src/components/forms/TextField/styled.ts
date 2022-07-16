import styled, { css } from "styled-components";
import { borderColors, borderRadius } from "../../../theme/mixins/web";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: ${({ theme }) => theme.elements.minHeight.display};
`;

export const InputLabel = styled.label`
    transition: 150ms ease-in-out;
    padding-bottom: ${props => props.theme.spacing.xxs};
    color: ${({ theme }) => theme.colors.darkTint};
    font-family: ${({ theme }) => theme.typography.fontFaces.primary};
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    &[data-focused="true"] {
        color: ${({ theme }) => theme.colors.primary};
    }

    &[data-disabled="true"] {
        opacity: 0.8;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    transition: 150ms ease-in-out;
    ${borderRadius};
    ${borderColors};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &[data-focused="true"] {
        box-shadow: ${props => props.theme.shadows.default};
    }

    &[data-disabled="true"] {
        opacity: 0.8;
    }
`;

const InputComponentCommonStyles = css`
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.darkTint};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    ${borderRadius};

    padding: 12px 12px;
    width: 100%;
    border: none;
    border-color: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${({ theme }) => theme.colors.mediumShade};
    }
`;

export const MaskedInputComponent = styled.div`
    width: 100%;

    & > input {
        ${InputComponentCommonStyles};
    }
`;

export const InputComponent = styled.input`
    ${InputComponentCommonStyles};
`;

export const TextAreaComponent = styled.textarea`
    ${InputComponentCommonStyles};
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
        props.iconPosition === "start"
            ? css`
                  padding-left: 12px;
              `
            : css`
                  padding-right: 12px;
              `}

    height: 100%;
    position: relative;
`;
export const InputValidationMessage = styled.span`
    padding-left: 2px;
    font-family: ${({ theme }) => theme.typography.fontFaces.primary};
    color: ${({ theme }) => theme.colors.danger};
    font-size: 13px;
`;
export const InputValidationContainer = styled.div`
    svg {
        color: ${props => props.theme.colors.danger};
        height: ${props => props.theme.spacing.sm};
        width: ${props => props.theme.spacing.sm};
    }
    padding-top: 6px;
    display: flex;
    height: ${props => props.theme.spacing.md};
`;
export const SpinnerOverride = css`
    margin-top: 8px;
`;
