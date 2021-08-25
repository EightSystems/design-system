import styled, { css } from "styled-components";
import * as T from "../../../theme/typography";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border-bottom-width: 2px;
    border-radius: 4px;

    .input--focused {
        border-bottom-color: ${({ theme }) => theme.colors.primary};
        box-shadow: ${props => props.theme.shadows.default};
    }
    .input--error {
        border-bottom-color: ${({ theme }) => theme.colors.danger};
    }
    .input--success {
        border-bottom-color: ${({ theme }) => theme.colors.success};
    }
`;
export const InputLabel = styled.label`
    ${T.FormLabel};
    padding-bottom: ${props => props.theme.spacing.xxs};
`;
export const InputWrapper = styled.div`
    display: flex;
    border-bottom-color: ${({ theme }) => theme.colors.light};
    border-bottom-width: 2px;
    border-radius: 4px;
    background: #fcfcfc;
    transition: 150ms ease-in-out;
`;
export const InputComponent = styled.input`
    ${T.FormInput};
    border-radius: 4px;
    padding: 12px 12px;
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
export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
    height: 100%;
    color: ${props => props.theme.colors.textBody};
    svg {
        cursor: pointer;
        width: 28px;
        height: 28px;
    }
`;
export const InputValidationMessage = styled.span`
    padding-left: 2px;
    ${T.FormValidationMessage};
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
