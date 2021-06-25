import styled from "styled-components";

export const DialogWrapper = styled.div`
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
export const ToastWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: flex-start;
    box-shadow: ${Theme.BoxShadow.default};
    border-radius: 3px;
    padding: var(--space-sm) var(--space-default);
    &[data-status="info"] {
        background: var(--secondary);
    }
    &[data-status="warning"] {
        background: var(--danger);
    }
    &[data-status="success"] {
        background: var(--successShade);
    }
    .close-icon {
        color: var(--secondaryContrast);
        width: 16px;
        height: 16px;
    }
    button {
        cursor: pointer;
    }
`;
export const TextWrapper = styled.div`
    font-family: ${Theme.FontFaces.Inter};
    margin-right: var(--space-md);
`;
export const ToastTitle = styled.h2`
    color: var(--secondaryContrast);
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`;
export const ToastDescription = styled.p`
    color: var(--secondaryContrast);
    font-size: 14px;
    font-weight: 400;
`;
export const ContextIconWrapper = styled.div`
    svg {
        color: var(--secondaryContrast);
        margin-right: var(--space-sm);
        width: 36px;
        height: 36px;
    }
`;
