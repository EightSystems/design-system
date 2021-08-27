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
    border-color: ${({ theme }) => theme.colors.medium};
    border-width: 1px;
    border-radius: 5px;
    ${props =>
        props["data-validationError"] == true
            ? css`
                  border-color: ${({ theme }) => theme.colors.danger};
              `
            : null}
    ${props =>
        props["data-focused"] == true
            ? css`
                  border-color: ${({ theme }) => theme.colors.primary};
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
    height: ${props => props.theme.spacing.md};
    flex: 1;
    flex-direction: row;
`;

export const InputValidationMessage = styled(Text)`
    font-family: ${props => props.theme.nativeTypography.fontFaces.primaryRegular};
    color: ${props => props.theme.colors.danger};
    padding-left: 2px;
`;
