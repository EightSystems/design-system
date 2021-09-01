import styled from "styled-components";
import {
    borderColors,
    textColors,
    backgroundColors,
    fontSizes,
    fontFaces,
    fontWeights,
} from "../../../theme/mixins/web";

export const ButtonWrapper = styled.button`
    ${textColors};
    ${backgroundColors};
    ${fontSizes};
    ${borderColors};
    ${fontFaces};
    ${fontWeights};

    &[data-size="small"] {
        padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
        font-size: ${({ theme }) => theme.typography.fontSizes.xxs};
    }

    &[data-size="medium"] {
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.default}`};
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    }

    &[data-size="large"] {
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.default}`};
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    }

    &[data-disabled="true"] {
        opacity: 0.75;
        cursor: initial;
    }

    &[data-bordercolor] {
        border-style: solid;
        border-width: 2px;
    }

    transition: 150ms ease-in-out;
    user-select: none;
    cursor: pointer;
    appearance: none;
    border-radius: 5px;

    &:hover,
    :focus {
        box-shadow: ${({ theme }) => theme.shadows.xs};
        opacity: 0.8;
        outline: none;
    }
`;
