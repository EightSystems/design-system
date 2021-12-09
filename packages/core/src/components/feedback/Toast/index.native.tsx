import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { ToastBody } from "./ToastBody";
import { ToastProps } from "./types";

export { ToastBody };

export const Toast = ({
    title,
    description,
    position = "bottom-right",
    status = "info",
    duration = 0,
    show = false,
    rightElement,
    leftElement,
    backgroundColor,
    textColor = "secondaryContrast",
    onClose = () => null,
}: ToastProps) => {
    const toast = useToast();
    const [internalShow, setInternalShow] = useState(show);

    useEffect(() => {
        if (show !== internalShow) {
            setInternalShow(show);
        }
    }, [show]);

    useEffect(() => {
        let isMounted = true;

        if (internalShow) {
            toast.show(description, {
                duration,
                data: {
                    title,
                    description,
                    rightElement,
                    leftElement,
                    backgroundColor,
                    textColor,
                },
                placement: position.startsWith("bottom") ? "bottom" : "top",
                type: status,
                onClose: () => {
                    if (isMounted) {
                        setInternalShow(false);
                    }

                    if (onClose) {
                        onClose();
                    }
                },
            });
        } else {
            toast.hideAll();
        }

        return () => {
            isMounted = false;
            toast.hideAll();
        };
    }, [internalShow]);

    return null;
};

export default Toast;
