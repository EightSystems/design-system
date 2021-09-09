import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    border-width: 2px;
    border-style: solid;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.colors.darkTint};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &[data-focused="true"] {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: ${props => props.theme.shadows.default};
    }

    &[data-validation-success="true"] {
        border-color: ${({ theme }) => theme.colors.success};
    }
    &[data-validation-error="true"] {
        border-color: ${({ theme }) => theme.colors.danger};
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

    border-radius: 6px;
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

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
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
