import styled, { css } from "styled-components/native";
import { Text } from "react-native";
import { textColors, fontSizes, fontFaces, textAlign } from "../../../theme/mixins/native";

export const Heading = styled(Text)`
    ${props =>
        props["data-italic"]
            ? css`
                  font-style: italic;
              `
            : null}
    ${props =>
        props["data-underline"]
            ? css`
                  text-decoration: underline;
              `
            : null}    

    ${textAlign};
    ${fontFaces};
    ${fontSizes};
    ${textColors};
`;
