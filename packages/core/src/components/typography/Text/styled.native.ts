import { Text as RNText } from "react-native";
import styled, { css } from "styled-components/native";
import { fontSizes, fontFaces, textColors, textAlign } from "../../../theme/mixins/native";

export const Text = styled(RNText)`
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

    ${textAlign};
    ${fontFaces};
    ${fontSizes};
    ${textColors};
`;
