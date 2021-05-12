import React from "react";
import styled from "styled-components";
import { Dialog, Transition } from "@headlessui/react";
import Proptypes from "prop-types";

const StyledDialog = styled(Dialog)`
    padding: var(--space-default) var(--space-default);
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
    .
`;
const StyledDialogOverlay = styled(Dialog.Overlay)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: black;
    opacity: 0.4;
    transition: 300ms ease-in-out;
`;
const ModalWrapper = styled.div`
    background-color: var(--background);
    border: solid 1px var(--gray);
    border-radius: 4px;
    box-shadow: var(--boxShadow-default);
    padding: var(--space-default) var(--space-default);
`;

const Modal = props => {
    return (
        <Transition appear={true} show={props.open}>
            <StyledDialog className={props.className} onClose={() => console.log("Fuck off Storybook")}>
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                </Transition.Child>
                <StyledDialogOverlay />
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <ModalWrapper>
                        {props.children}
                    </ModalWrapper>
                </Transition.Child>
            </StyledDialog>
        </Transition>
    );
};

Modal.propTypes = {
    classNames: Proptypes.string,
    overlayClass: Proptypes.string,
    open: Proptypes.bool,
    onClose: Proptypes.func,
    initialFocus: Proptypes.any,
};

export default Modal;
