import styled from "styled-components";
import { borderColors } from "../../../theme/mixins/web";
import * as T from "../../../theme/typography";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;

    &:after {
        content: ">";
        pointer-events: none;
        font-family: ${props => props.theme.typography.fontFaces.primary};
        font-size: 18px;
        font-weight: 600;
        position: relative;
        bottom: 50px;
        margin-left: calc(100% - 35px);
        color: ${props => props.theme.colors.grayShade};
        transform: rotate(90deg);
    }
`;
export const InputLabel = styled.label`
    ${T.FormLabel};
    padding-bottom: 4px;
`;
export const SelectComponent = styled.select`
    ${T.FormInput};

    border: ${props => props.theme.borders.default};

    ${borderColors};

    appearance: none;
    padding: 12px 12px;
    width: 100%;

    background: ${props => props.theme.colors.white};
    border-radius: 4px;
    transition: 150ms ease-in-out;
    :focus {
        outline: none;
        border: ${props => props.theme.borders.hover};
        box-shadow: 0px 0px 8px rgba(0, 7, 46, 0.2);
    }

    ::-ms-expand {
        display: none;
    }
`;
export const InputValidationMessage = styled.span`
    padding-left: 2px;
    ${T.FormValidationMessage};
`;
export const InputValidationContainer = styled.div`
    svg {
        color: ${props => props.theme.colors.danger};
        height: ${props => props.theme.spacing.sm};
        width: ${props => props.theme.spacing.sm};
    }
    padding-top: 6px;
    display: flex;
    height: 26px;
`;
