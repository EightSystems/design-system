import { Transition } from "@headlessui/react";
import React from "react";
import * as S from "./styled";
import { ModalProps } from "./types";

const Modal = (props: ModalProps) => {
    const onClose = props.onClose || (() => null);

    return (
        <Transition appear={true} show={props.open || false}>
            <S.StyledDialog className={props.className} onClose={onClose}>
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
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <S.ModalWrapper>{props.children}</S.ModalWrapper>
                </Transition.Child>
            </S.StyledDialog>
        </Transition>
    );
};

export { Modal };
export type { ModalProps };
