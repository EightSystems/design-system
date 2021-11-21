import styled from "styled-components";

export const PaymentPromptWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const PromptLabel = styled.p`
    color: ${props => props.theme.colors.textBody};
    font-family: ${props => props.theme.typography.fontFaces.primary};
    font-size: 20px;
    text-align: center;
    margin-top: ${props => props.theme.spacing.default};
    margin-bottom: ${props => props.theme.spacing.default};
`;
