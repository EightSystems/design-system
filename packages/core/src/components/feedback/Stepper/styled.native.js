import styled from "styled-components/native";
import media from "../../../theme/media";

export const StepperContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    ${media.tablet`
        justify-content: flex-start;
    `};
`;
export const TextContainer = styled.View`
    padding-left: ${props => props.theme.spacing.xs};
    display: flex;
    justify-content: center;
`;
export const ActiveStepLabel = styled.Text`
    color: ${props => props.theme.colors.lightContrast};
    font-family: ${props => props.theme.nativeTypography.fontFaces.primaryBold};
    font-size: 18px;
    font-weight: 700;
    ${media.tablet`
        font-size: 16px;
    `};
`;
export const NextStepLabel = styled.Text`
    color: ${props => props.theme.colors.lightContrast};
    font-family: ${props => props.theme.nativeTypography.fontFaces.primaryRegular};
    font-size: 16px;
    ${media.tablet`
        font-size: 14px;
    `};
`;
