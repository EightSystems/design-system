import styled from "styled-components";

export const AccordionWrapper = styled.div`
    margin-top: ${props => props.theme.space.xs};
    .ReactCollapse--collapse {
        transition: height 300ms ease-in-out;
    }
`;
export const AccordionItemContainer = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    :focus {
        outline: none;
    }
`;
export const AccordionItemLabel = styled.p`
    font-family: ${props => props.theme.fontFaces.primary};
    font-size: 20px;
    font-weight: 700;
    user-select: none;
`;
export const AccordionItemUnderline = styled.div`
    width: 100%;
    border-top: ${props => props.theme.border.light};
    margin-top: ${props => props.theme.space.xs};
`;
export const AccordionItemIconWrapper = styled.div`
    display: flex;
    align-items: center;
    img,
    svg {
        width: ${props => props.theme.space.md};
        height: ${props => props.theme.space.md};
        color: var(--secondary);
    }
`;
