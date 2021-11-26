import styled, { css } from "styled-components";
import { backgroundColors, marginSpacing, paddingSpacing } from "../../../theme/mixins/web";

export const BoxStyled = styled.div`
    ${backgroundColors};
    ${marginSpacing};
    ${paddingSpacing};

    ${props =>
        props.padded
            ? css`
                  padding: ${({ theme }) => theme.spacing.default};
              `
            : null}
`;
