import { ReactNode } from "react";

export type WebModalProps = {
    className?: string;
    overlayClass?: string;
    style?: any;

    open?: boolean;
    onClose?: CallableFunction;
    initialFocus?: any;
    children: ReactNode;
};

export type NativeModalProps = Omit<WebModalProps, "className" | "overlayClass">;
