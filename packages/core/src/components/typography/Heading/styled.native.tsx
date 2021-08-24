import styled, { css } from "styled-components/native";
import { Text } from "react-native";
import { textColors, fontSizes, fontFaces } from "../../../theme/mixins/native";

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
