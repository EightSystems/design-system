import { ReactNode } from "react";

export type ModalProps = {
    /**
     * You can only use it with the Web version
     */
    className?: string;

    /**
     * Style for the modal itself
     */
    overlayStyle?: any;
    backdropStyle?: any;

    style?: any;

    open?: boolean;
    onClose?: () => void;
    initialFocus?: any;
    children: ReactNode;

    fullScreen?: boolean;
    halfScreen?: boolean;
};
