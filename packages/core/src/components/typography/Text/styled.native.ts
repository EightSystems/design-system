import { Text as RNText } from "react-native";
import styled from "styled-components/native";
import {
    fontFaces,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    marginSpacing,
    paddingSpacing,
    textAlign,
    textColors,
    textDecoration,
} from "../../../theme/mixins/native";

export const Text = styled(RNText)`
    ${textDecoration};
    ${textAlign};
    ${fontFaces};
    ${fontWeights};
    ${fontSizes};
    ${textColors};
    ${lineHeights};
    ${letterSpacings};
    ${marginSpacing};
    ${paddingSpacing};
`;
