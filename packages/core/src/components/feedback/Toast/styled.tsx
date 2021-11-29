import styled from "styled-components";
import { Box } from "../../layout/Box";

export const DialogWrapper = styled(Box)`
    position: fixed;
    z-index: 10;
    visibility: ${props => (props.showToast ? "visible" : "hidden")};

    .top-left {
        transform: ${props => (props.width ? `translate(-${props.width + 20}px, 0px)` : `translate(-400px , 0px)`)};
        top: 12px;
        left: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .top-left__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    .top-right {
        transform: ${props => (props.width ? `translate(${props.width + 20}px, 0px)` : `translate(400px , 0px)`)};
        top: 12px;
        right: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .top-right__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    .top-center {
        transform: ${props => (props.width ? `translate(0px, -${props.height + 20}px)` : `translate(400px , 0px)`)};
        top: 12px;
        left: ${props => `calc(50% - calc(${props.width}px / 2))`};
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .top-center__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    .bottom-left {
        transform: ${props => (props.width ? `translate(-${props.width + 20}px, 0px)` : `translate(-400px , 0px)`)};
        bottom: 12px;
        left: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .bottom-left__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    .bottom-right {
        transform: ${props => (props.width ? `translate(${props.width + 20}px, 0px)` : `translate(400px , 0px)`)};
        bottom: 12px;
        right: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .bottom-right__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    .bottom-center {
        transform: ${props => (props.width ? `translate(0px, ${props.height + 20}px)` : `translate(400px , 0px)`)};
        bottom: 12px;
        left: ${props => `calc(50% - calc(${props.width}px / 2))`};
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .bottom-center__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;

export const ToastWrapper = styled(Box)`
    position: fixed;
    display: flex;
    align-items: center;

    box-shadow: ${props => props.theme.shadows.default};
    border-radius: 3px;
`;

export const TextWrapper = styled(Box)`
    margin-right: ${props => props.theme.spacing.md};
`;

export const ContextIconWrapper = styled(Box)`
    color: ${props => props.theme.colors.secondaryContrast};
    margin-right: ${props => props.theme.spacing.sm};

    svg {
        width: ${props => props.theme.typography.fontSizes.lg};
        height: ${props => props.theme.typography.fontSizes.lg};
    }
`;

export const CloseButtonIconWrapper = styled(Box)`
    color: ${props => props.theme.colors.secondaryContrast};

    svg {
        width: ${props => props.theme.typography.fontSizes.sm};
        height: ${props => props.theme.typography.fontSizes.sm};
    }
`;

export const CloseButton = styled.button`
    cursor: pointer;
`;
