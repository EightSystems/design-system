import { ReactChild } from "react";

export type WebModalProps = {
    className?: string;
    overlayClass?: string;
    style?: any;

    open?: boolean;
    onClose?: CallableFunction;
    initialFocus?: any;
    children: ReactChild;
};

export type NativeModalProps = Omit<WebModalProps, "className" | "overlayClass">;
