import styled from "styled-components";
import media from "../../../theme/media";

export const StepperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    ${media.tablet`
        justify-content: flex-start;
    `};
`;
export const TextContainer = styled.div`
    padding-left: ${props => props.theme.space.xs};
`;
export const ActiveStepLabel = styled.h1`
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fontFaces.primary};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    ${media.tablet`
        font-size: 16px;
    `};
`;
export const NextStepLabel = styled.h2`
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fontFaces.primary};
    font-size: 16px;
    ${media.tablet`
        font-size: 14px;
    `};
`;
