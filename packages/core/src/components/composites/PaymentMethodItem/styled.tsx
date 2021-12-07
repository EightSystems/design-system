import React from "react";
import styled from "styled-components";
import { Button } from "../../forms/Button";
import { Box } from "../../layout/Box";

export const MainWrapper = styled(Button)`
    flex-direction: column;
    align-items: center;
    display: flex;
`;

export const IconWrapper = styled(Box)``;

export const styleIconHelper = (
    IconComponent: React.ReactNode,
    maxWidth = "xxlg",
    maxHeight = "lg",
    color = "white"
) => {
    return () => {
        const IconComponentStyled = styled(IconComponent)`
            max-width: ${props => props.theme.spacing[maxWidth]};
            max-height: ${props => props.theme.spacing[maxHeight]};
            color: ${props => props.theme.colors[color]};
        `;
        return <IconComponentStyled width={200} height={200} />;
    };
};
