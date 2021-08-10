import styled, { css } from "styled-components/native";
import { View, TextInput, Text } from "react-native";

export const MainWrapper = styled(View)`
    flex: 1;
    flex-direction: column;
`;

export const InputLabel = styled(Text)`
    font-family: ${props => props.theme.nativeTypography.fontFaces.primarySemiBold};
    color: ${props => props.theme.colors.darkTint};
    font-size: 16px;
    margin-bottom: 2px;
`;

export const InputWrapper = styled(View)`
    background: ${({ theme }) => theme.colors.light};
    border-bottom-color: ${({ theme }) => theme.colors.light};
    border-bottom-width: 2px;
    border-radius: 4px;
    ${props =>
        props["data-validationSuccess"] == true
            ? css`
                  border-bottom-color: ${({ theme }) => theme.colors.success};
              `
            : null}
    ${props =>
        props["data-validationError"] == true
            ? css`
                  border-bottom-color: ${({ theme }) => theme.colors.danger};
              `
            : null}
    ${props =>
        props["data-focused"] == true
            ? css`
                  border-bottom-color: ${({ theme }) => theme.colors.secondary};
              `
            : null}
`;

export const InputComponent = styled(TextInput)`
    font-family: ${props => props.theme.nativeTypography.fontFaces.secondaryMedium};
    font-size: 16px;
    padding: 8px 12px;
    width: 100%;
`;

export const InputValidationContainer = styled(View)`
    margin-top: ${props => props.theme.spacing.xxs};
    flex: 1;
    flex-direction: row;
`;

export const InputValidationMessage = styled(Text)`
    font-family: ${props => props.theme.nativeTypography.fontFaces.primaryRegular};
    color: ${props => props.theme.colors.danger};
    padding-left: 2px;
`;
