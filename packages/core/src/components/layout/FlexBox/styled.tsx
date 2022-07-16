import styled, { css } from "styled-components";
import Box from "../Box";

export const FlexBoxStyled = styled(Box)`
    flex: 1;
    display: flex;
    ${props =>
        css`
            flex-direction: ${props.flexDirection || "row"};

            ${props.alignItems
                ? css`
                      align-items: ${props => props.alignItems};
                  `
                : null}
            ${props.justifyContent
                ? css`
                      justify-content: ${props => props.justifyContent};
                  `
                : null}
        `}
`;
