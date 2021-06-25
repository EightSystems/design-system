import styled from "styled-components";

export const MainWrapper = styled.button`
    background: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px ${props => props.theme.colors.grayTint};
    border-radius: 4px;
    padding: ${props => props.theme.space.default};
    cursor: pointer;
    transition: 150ms ease-in-out;
    user-select: none;

    :hover,
    :focus {
        border: solid 1px ${props => props.theme.colors.secondary};
        box-shadow: ${props => props.theme.boxShadow.default};
        outline: none;
    }
`;
export const ContentWrapperRow = styled.div`
    display: flex;
    flex-direction: row;
`;
export const ContentWrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${props => props.theme.space.sm};
`;
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    img,
    svg {
        width: ${props => props.theme.space.lg};
        height: ${props => props.theme.space.lg};
        color: ${props => props.theme.colors.secondary};
    }
`;
export const ContentLabel = styled.p`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fontFaces.primary};
    font-size: 16px;
    text-align: left;
`;
export const HighlightedContentLabel = styled(ContentLabel)`
    font-weight: 700;
`;
