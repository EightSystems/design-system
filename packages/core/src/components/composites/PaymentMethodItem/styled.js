import styled from "styled-components";

export const MainWrapper = styled.button`
    background: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px ${props => props.theme.colors.grayTint};
    border-radius: 4px;
    padding: ${props => props.theme.spacing.default};
    cursor: pointer;
    transition: 150ms ease-in-out;

    :hover,
    :focus {
        border: solid 1px ${props => props.theme.colors.secondary};
        box-shadow: ${props => props.theme.shadows.default};
        outline: none;
    }
`;
export const IconWrapper = styled.div`
    img,
    svg {
        width: ${props => props.theme.spacing.xxlg};
        height: ${props => props.theme.spacing.lg};
        color: ${props => props.theme.colors.white};
    }
`;
export const ContentLabel = styled.p`
    color: ${props => props.theme.colors.textPrimary};
    text-align: center;
    font-family: ${props => props.theme.typography.fontFaces.primary};
    font-size: 16px;
`;
export const ContentTitle = styled(ContentLabel)`
    font-weight: 700;
`;
