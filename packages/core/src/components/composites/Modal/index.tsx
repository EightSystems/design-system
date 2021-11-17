import React from "react";
import { Transition } from "@headlessui/react";
import * as S from "./styled";

import { WebModalProps } from "./types";

const Modal = (props: WebModalProps) => {
    const onClose = props.onClose || (() => null);

    return (
        <Transition appear={true} show={props.open}>
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

export { Modal };
export type { WebModalProps };
