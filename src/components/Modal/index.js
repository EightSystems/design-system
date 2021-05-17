import React from "react";
import { Transition } from "@headlessui/react";
import Proptypes from "prop-types";
import * as S from "./styled";

const Modal = props => {
    return (
        <Transition appear={true} show={props.open}>
            <S.StyledDialog className={props.className} onClose={() => console.log("Fuck off Storybook")}>
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <S.StyledDialogOverlay />
                </Transition.Child>
                
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <S.ModalWrapper>{props.children}</S.ModalWrapper>
                </Transition.Child>
            </S.StyledDialog>
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
