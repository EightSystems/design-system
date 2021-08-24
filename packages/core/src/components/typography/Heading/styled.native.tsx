import styled, { css } from "styled-components/native";
import { Text } from "react-native";
import { textColors, fontSizes, fontFaces } from "../../../theme/mixins/native";

import { nativeTypography } from "../../../theme/typography";

export function getLetterSpacingStyle(letterSpacingProps: string) {
    switch (letterSpacingProps) {
        case "xxs":
            return {
                letterSpacing: nativeTypography.letterSpacings.xxs,
            };
        case "xs":
            return {
                letterSpacing: nativeTypography.letterSpacings.xs,
            };
        case "sm":
            return {
                letterSpacing: nativeTypography.letterSpacings.sm,
            };
        case "default":
            return {
                letterSpacing: nativeTypography.letterSpacings.default,
            };
        case "md":
            return {
                letterSpacing: nativeTypography.letterSpacings.md,
            };
        case "lg":
            return {
                letterSpacing: nativeTypography.letterSpacings.lg,
            };
        case "xl":
            return {
                letterSpacing: nativeTypography.letterSpacings.xl,
            };
    }
}

export const Heading = styled(Text)`
    ${props =>
        props["data-italic"] == "true"
            ? css`
                  font-style: italic;
              `
            : null}
    ${props =>
        props["data-underline"] == "true"
            ? css`
                  text-decoration-line: underline;
                  text-decoration-style: solid;
              `
            : null}    
    
    ${fontFaces};
    ${fontSizes};
    ${textColors};
`;
