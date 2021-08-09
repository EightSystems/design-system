import styled, { css } from "styled-components/native";
import { View, TextInput } from "react-native";

export const MainWrapper = styled(View)`
    flex: 1;
    flex-direction: column;
`;

export const InputLabel = styled(Text)`
    font-family: ${props => props.theme.nativeTypography.fontFaces.secondaryRegular};
    color: ${props => props.theme.colors.medium};
    font-size: 16px;
`;

export const InputWrapper = styled(View)`
    border: solid 2px ${props => props.theme.colors.dark};
    border-radius: 4px;
    ${props =>
        props["data-validationSuccess"] == true
            ? css`
                  border: solid 2px ${props => props.theme.colors.success};
              `
            : null}
    ${props =>
        props["data-validationError"] == true
            ? css`
                  border: solid 2px ${props => props.theme.colors.danger};
              `
            : null}
`;

export const InputComponent = styled(TextInput)`
    border-radius: 4px;
    padding: 12px 12px;
    width: 100%;
    border: none;
    border-color: none;
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
