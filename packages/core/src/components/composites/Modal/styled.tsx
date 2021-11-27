import { Dialog } from "@headlessui/react";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
    padding: ${props => props.theme.spacing.default};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .opacity-0 {
        opacity: 0;
    }
    .opacity-100 {
        opacity: 100;
    }
    .ease-out {
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    .ease-in {
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    }
    .duration-300 {
        transition-duration: 300ms;
    }
    .duration-200 {
        transition-duration: 200ms;
    }
`;
export const StyledDialogOverlay = styled(Dialog.Overlay)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: black;
    opacity: 0.4;
    transition: 300ms ease-in-out;
    overflow: scroll;
`;
export const ModalWrapper = styled.div`
    background-color: ${props => props.theme.colors.background};
    border: solid 1px ${props => props.theme.colors.gray};
    border-radius: 4px;
    box-shadow: ${props => props.theme.shadows.default};
    padding: ${props => props.theme.spacing.default};
    width: 100%;
`;
