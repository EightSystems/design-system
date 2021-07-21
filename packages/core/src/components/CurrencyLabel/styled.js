import styled from "styled-components";

export const CurrencyLabelWrapper = styled.h1`
    font-family: ${props => props.theme.fontFaces.secondary};
    font-size: 36px;
    font-weight: 700;
    ${props => (props.size ? `font-size: ${props.size}${props.sizeUnit}` : "")};

    &[data-color="light"] {
        color: ${props => props.theme.colors.primaryContrast};
    }
    &[data-color="dark"] {
        color: ${props => props.theme.colors.primary};
    }
`;
