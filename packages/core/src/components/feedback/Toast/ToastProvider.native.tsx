import React from "react";
import { ToastProvider as RNToastProvider } from "react-native-toast-notifications";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";
import { ToastBody } from "./ToastBody";
import { ToastProviderProps } from "./types";

const toastTypes = {
    info: ({
        data: { title, description, rightElement, leftElement, backgroundColor, textColor },
        onHide,
    }: ToastProps) => {
        return (
            <ToastBody
                title={title}
                description={description}
                status={"info"}
                onClose={onHide}
                rightElement={rightElement}
                leftElement={leftElement}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        );
    },
    success: ({
        data: { title, description, rightElement, leftElement, backgroundColor, textColor },
        onHide,
    }: ToastProps) => {
        return (
            <ToastBody
                title={title}
                description={description}
                status={"success"}
                onClose={onHide}
                rightElement={rightElement}
                leftElement={leftElement}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        );
    },
    warning: ({
        data: { title, description, rightElement, leftElement, backgroundColor, textColor },
        onHide,
    }: ToastProps) => {
        return (
            <ToastBody
                title={title}
                description={description}
                status={"warning"}
                onClose={onHide}
                rightElement={rightElement}
                leftElement={leftElement}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        );
    },
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
    return <RNToastProvider renderType={toastTypes}>{children}</RNToastProvider>;
};
