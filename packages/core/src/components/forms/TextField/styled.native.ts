import { Pressable } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";
import { borderColors, borderRadius } from "../../../theme/mixins/native";

export const MainWrapper = styled.View`
    flex-direction: column;
    width: 100%;
    min-height: ${({ theme }) => theme.elements.minHeight.display};
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

    ${borderRadius};
    ${borderColors};

    background-color: white;

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
    font-family: ${props => props.theme.nativeTypography.fontFaces.primaryNormal};
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
