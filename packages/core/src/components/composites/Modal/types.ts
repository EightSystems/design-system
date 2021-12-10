import { ReactNode } from "react";

export type WebModalProps = {
    className?: string;
    overlayClass?: string;
    style?: any;

    open?: boolean;
    onClose?: CallableFunction;
    initialFocus?: any;
    children: ReactNode;

    halfScreen?: boolean;
};

export type NativeModalProps = Omit<WebModalProps, "className" | "overlayClass">;
