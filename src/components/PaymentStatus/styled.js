import styled from "styled-components";

export const PaymentStatusWrapper = styled.div`
    font-family: ${props => props.theme.fontFaces.primary};
    box-shadow: ${props => props.theme.boxShadow.default};
    padding: ${props => props.theme.space.default};
    text-align: center;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &[data-background="approved"] {
        background: ${props => props.theme.colors.primary};
    }
    &[data-background="refused"] {
        background: ${props => props.theme.colors.danger};
    }
    &[data-background="pending"] {
        background: ${props => props.theme.colors.pending};
    }
`;
export const IconWrapper = styled.div`
    margin-top: ${props => props.theme.space.default};
    margin-bottom: ${props => props.theme.space.default};
    svg {
        width: ${props => props.theme.space.xlg};
        height: ${props => props.theme.space.xlg};
        color: ${props => props.theme.colors.primaryContrast};
    }
`;
export const PaymentStatusTitle = styled.h1`
    margin-bottom: ${props => props.theme.space.default};
    color: ${props => props.theme.colors.primaryContrast};
    font-size: 36px;
    font-weight: 700;
`;
export const PaymentStatusDescription = styled.p`
    margin-top: ${props => props.theme.space.default};
    margin-bottom: ${props => props.theme.space.default};
    color: ${props => props.theme.colors.primaryContrast};
    font-size: 18px;
`;
