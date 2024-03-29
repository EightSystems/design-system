import styled, { css } from "styled-components";
import {
    backgroundColors,
    borderColors,
    borderRadius,
    fontFaces,
    fontSizes,
    fontWeights,
    textColors,
} from "../../../theme/mixins/web";

export const ButtonWrapper = styled.button`
    ${textColors};
    ${backgroundColors};
    ${borderRadius};
    ${fontFaces};
    ${fontWeights};
    ${borderColors};

    min-height: ${({ theme }) => theme.elements.minHeight.default};

    ${props =>
        props["data-size"] === "small"
            ? css`
                  padding: ${({ theme, padded }) => (padded ? `${theme.spacing.xxs} ${theme.spacing.sm}` : "0px")};
                  min-height: ${({ theme }) => theme.elements.minHeight.small};
                  font-size: ${({ theme }) => theme.typography.fontSizes.xxs};
              `
            : null}

    ${props =>
        props["data-size"] === "medium"
            ? css`
                  padding: ${({ theme, padded }) => (padded ? `${theme.spacing.xs} ${theme.spacing.default}` : "0px")};
                  min-height: ${({ theme }) => theme.elements.minHeight.medium};
                  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
              `
            : null}

    ${props =>
        props["data-size"] === "large"
            ? css`
                  padding: ${({ theme, padded }) => (padded ? `${theme.spacing.sm} ${theme.spacing.default}` : "0px")};
                  min-height: ${({ theme }) => theme.elements.minHeight.large};
                  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
              `
            : null}

    ${props =>
        props["data-disabled"]
            ? css`
                  opacity: 0.75;
              `
            : null}

    ${fontSizes};

    &[data-disabled="true"] {
        opacity: 0.75;
        cursor: initial;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 150ms ease-in-out;
    user-select: none;
    cursor: pointer;
    appearance: none;

    ${props =>
        props.fluid
            ? css`
                  width: 100%;
              `
            : null}

    &:hover,
    :focus {
        box-shadow: ${({ theme }) => theme.shadows.xs};
        opacity: 0.8;
        outline: none;
    }
`;

export const SpinnerContainer = styled.div`
    position: relative;
    bottom: 1px;
`;
