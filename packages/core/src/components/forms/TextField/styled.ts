import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .input--focused {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: ${props => props.theme.shadows.xs};
    }
    .input--error {
        border-color: ${({ theme }) => theme.colors.danger};
    }
    .input--success {
        border-color: ${({ theme }) => theme.colors.success};
    }
`;
export const InputLabel = styled.label`
    padding-bottom: ${props => props.theme.spacing.xxs};
    color: ${({ theme }) => theme.colors.darkTint};
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
`;
export const InputWrapper = styled.div`
    display: flex;
    transition: 150ms ease-in-out;

    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.medium};
`;
export const InputComponent = styled.input`
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.darkTint};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    border-radius: 4px;
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
export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
    height: 100%;
    color: ${props => props.theme.colors.medium};
    svg {
        cursor: pointer;
        width: 28px;
        height: 28px;
    }
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
