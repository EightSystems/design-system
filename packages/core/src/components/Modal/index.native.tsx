import * as React from "react";
import { Modal as RNModal } from "react-native";

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => null;
    size: string | number;
    initialFocusRef: any;
    finalFocusRef: any;
    avoidKeyboard: boolean;
    closeOnOverlay: boolean;
    keyboardDismiss: boolean;
    headerIcon: any;
};

const Modal = (
    {
        children,
        isOpen,
        onClose,
        size,
        initialFocusRef,
        finalFocusRef,
        avoidKeyboard,
        closeOnOverlay,
        keyboardDismiss,
        headerIcon,
    }: ModalProps,
    ref: any
) => {
    const [visible, setVisible] = React.useState(true);
    const handleClose = () => setVisible(false);

    return <RNModal />;
};

export default Modal;
