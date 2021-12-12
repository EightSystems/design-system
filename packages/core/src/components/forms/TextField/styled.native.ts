import { Pressable } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

export const MainWrapper = styled.View`
    flex-direction: column;
    width: 100%;
    min-height: 80px;
`;

export const InputLabel = styled.Text`
    color: ${props => props.theme.colors.dark};
    font-family: ${props => props.theme.nativeTypography.fontFaces.primarySemiBold};
    color: ${props => props.theme.colors.darkTint};
    font-size: 16px;
    margin-bottom: 2px;

    ${props =>
        props["data-focused"] == true
            ? css`
                  color: ${({ theme }) => theme.colors.primary};
              `
            : null}
`;

export const InputWrapper = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    ${props =>
        props["data-icon"]
            ? css`
                  padding-right: 28px;
              `
            : null}

    border-color: ${({ theme }) => theme.colors.darkTint};
    background-color: white;
    border-width: 2px;
    border-radius: 5px;
    ${props =>
        props["data-validationError"] == true
            ? css`
                  border-color: ${({ theme }) => theme.colors.danger};
              `
            : null}

    ${props =>
        props["data-validationSuccess"] == true
            ? css`
                  border-color: ${({ theme }) => theme.colors.success};
              `
            : null}

    ${props =>
        props["data-focused"] == true
            ? css`
                  border-color: ${({ theme }) => theme.colors.primary};
              `
            : null}
`;

const InputComponentCommonStyles = css`
    font-family: ${props => props.theme.nativeTypography.fontFaces.secondaryMedium};
    color: ${({ theme }) => theme.colors.dark};
    font-size: 16px;
    padding: 8px 12px;
    width: 100%;

    ${props =>
        props["data-disabled"] == true
            ? css`
                  opacity: 0.8;
              `
            : null}
`;

export const InputComponent = styled.TextInput`
    ${InputComponentCommonStyles};
`;

export const MaskedInputComponent = styled(TextInputMask)`
    ${InputComponentCommonStyles};
`;

export const InputValidationContainer = styled.View`
    margin-top: ${props => props.theme.spacing.xxs};
    flex-direction: row;
    align-items: center;
`;

export const InputValidationMessage = styled.Text`
    font-family: ${props => props.theme.nativeTypography.fontFaces.primaryRegular};
    color: ${props => props.theme.colors.danger};
    padding-left: 4px;
    padding-right: 4px;
`;

export const IconWrapper = styled(Pressable)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
    height: 100%;
    position: absolute;
    right: 0px;
`;
