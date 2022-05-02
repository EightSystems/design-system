import styled from "styled-components";
import {
    backgroundColors,
    borderColors,
    borderRadius,
    marginSpacing,
    paddingSpacing,
    shadowMaker,
} from "../../../theme/mixins/web";

export const BoxStyled = styled.div`
    ${backgroundColors};
    ${marginSpacing};
    ${paddingSpacing};
    ${borderRadius};
    ${borderColors};
    ${shadowMaker};
`;
