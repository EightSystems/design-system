import styled from "styled-components";
import { Box } from "../../layout/Box";

export const ToastWrapper = styled(Box)`
    position: fixed;
    display: flex;
    align-items: center;

    box-shadow: ${props => props.theme.shadows.default};
    border-radius: 3px;
`;

export const DialogWrapper = styled(Box)`
    position: fixed;
    z-index: 10;
    visibility: ${props => (props.showToast ? "visible" : "hidden")};

    &.top-left ${ToastWrapper} {
        transform: ${props => (props.width ? `translate(-${props.width + 20}px, 0px)` : `translate(-400px , 0px)`)};
        top: 12px;
        left: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    &.top-left__mounted ${ToastWrapper} {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    &.top-right ${ToastWrapper} {
        transform: ${props => (props.width ? `translate(${props.width + 20}px, 0px)` : `translate(400px , 0px)`)};
        top: 12px;
        right: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    &.top-right__mounted ${ToastWrapper} {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    &.top-center ${ToastWrapper} {
        transform: ${props => (props.width ? `translate(0px, -${props.height + 20}px)` : `translate(400px , 0px)`)};
        top: 12px;
        left: ${props => `calc(50% - calc(${props.width}px / 2))`};
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    &.top-center__mounted ${ToastWrapper} {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    &.bottom-left ${ToastWrapper} {
        transform: ${props => (props.width ? `translate(-${props.width + 20}px, 0px)` : `translate(-400px , 0px)`)};
        bottom: 12px;
        left: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    &.bottom-left__mounted ${ToastWrapper} {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    &.bottom-right ${ToastWrapper} {
        transform: ${props => (props.width ? `translate(${props.width + 20}px, 0px)` : `translate(400px , 0px)`)};
        bottom: 12px;
        right: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    &.bottom-right__mounted ${ToastWrapper} {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    &.bottom-center ${ToastWrapper} {
        transform: ${props => (props.width ? `translate(0px, ${props.height + 20}px)` : `translate(400px , 0px)`)};
        bottom: 12px;
        left: ${props => `calc(50% - calc(${props.width}px / 2))`};
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    &.bottom-center__mounted ${ToastWrapper} {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;

export const CloseButton = styled.button`
    cursor: pointer;
`;
