import classnames from "classnames";
import uniqueId from "lodash/uniqueId";
import React, { useEffect, useRef, useState } from "react";
import { useContainerDimensions } from "../../../hooks/useContainerDimensions";
import * as S from "./styled";
import { ToastBody } from "./ToastBody";
import { ToastProps } from "./types";

export { ToastBody };

export const Toast = React.forwardRef<any, ToastProps>(
    (
        {
            title,
            description,
            position = "bottom-right",
            status = "info",
            show = false,
            duration = 5000,
            onClose = () => null,
            rightElement,
            leftElement,
            backgroundColor,
            textColor = "secondaryContrast",
        },
        componentRef
    ) => {
        const elementUniqueId = uniqueId(title);
        const toastWrapperRef = useRef();
        const [internalShow, setInternalShow] = useState(show);
        const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

        /* Get width and height values from the ToastContainer to be used on the transitions between visible and non-visible states */
        const { width, height } = useContainerDimensions(toastWrapperRef);

        const positionClasses = classnames({
            /* Base classes for all the unmounted positions */
            "top-left": position === "top-left",
            "top-center": position === "top-center",
            "top-right": position === "top-right",
            "bottom-left": position === "bottom-left",
            "bottom-center": position === "bottom-center",
            "bottom-right": position === "bottom-right",

            /* Classes for when the component is both mounted and positioned */
            "top-left__mounted": internalShow && position === "top-left",
            "top-center__mounted": internalShow && position === "top-center",
            "top-right__mounted": internalShow && position === "top-right",
            "bottom-left__mounted": internalShow && position === "bottom-left",
            "bottom-center__mounted": internalShow && position === "bottom-center",
            "bottom-right__mounted": internalShow && position === "bottom-right",
        });

        const handleClose = () => {
            setInternalShow(false);
            closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);

            if (onClose) {
                onClose();
            }
        };

        useEffect(() => {
            if (show !== internalShow) {
                setInternalShow(show);
            }

            if (show) {
                if (duration !== 0 && typeof duration === "number") {
                    closeTimeoutRef.current = setTimeout(() => {
                        handleClose();
                    }, duration);
                }
            } else {
                closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
            }

            return () => {
                closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
            };
        }, [show, duration]);

        return (
            <S.DialogWrapper
                ref={componentRef}
                id={elementUniqueId}
                width={width}
                height={height}
                showToast={internalShow}
                className={positionClasses}
            >
                <ToastBody
                    ref={toastWrapperRef}
                    title={title}
                    description={description}
                    status={status}
                    onClose={handleClose}
                    rightElement={rightElement}
                    leftElement={leftElement}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                />
            </S.DialogWrapper>
        );
    }
);

export default Toast;
