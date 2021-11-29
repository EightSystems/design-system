import classnames from "classnames";
import uniqueId from "lodash/uniqueId";
import React, { useRef } from "react";
import { useContainerDimensions } from "../../../hooks/useContainerDimensions";
import { Icon } from "../../primitives/Icon";
import { Heading } from "../../typography/Heading";
import { Text } from "../../typography/Text";
import * as S from "./styled";
import { ToastProps } from "./types";

export const Toast = React.forwardRef<any, ToastProps>(
    (
        { title, description, position = "bottom-right", status = "info", showToast = false, onClose = () => null },
        componentRef
    ) => {
        const elementUniqueId = uniqueId(title);
        const toastWrapperRef = useRef();

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
            "top-left__mounted": showToast && position === "top-left",
            "top-center__mounted": showToast && position === "top-center",
            "top-right__mounted": showToast && position === "top-right",
            "bottom-left__mounted": showToast && position === "bottom-left",
            "bottom-center__mounted": showToast && position === "bottom-center",
            "bottom-right__mounted": showToast && position === "bottom-right",
        });

        return (
            <S.DialogWrapper
                ref={componentRef}
                id={elementUniqueId}
                /* Computed width and height values that will be used by styled-components to determinate animations */
                width={width}
                height={height}
                showToast={showToast}
            >
                <S.ToastWrapper
                    ref={toastWrapperRef}
                    className={positionClasses}
                    backgroundColor={status == "info" ? "secondary" : status == "warning" ? "danger" : "successShade"}
                    padding={"sm"}
                >
                    <S.ContextIconWrapper>
                        {status === "info" ? (
                            <Icon familyName="Material" icon="md-info" />
                        ) : status == "success" ? (
                            <Icon familyName="Material" icon="md-check-circle" />
                        ) : (
                            <Icon familyName="Material" icon="md-error" />
                        )}
                    </S.ContextIconWrapper>

                    <S.TextWrapper>
                        <Heading
                            textColor={"secondaryContrast"}
                            fontFace={"secondary"}
                            fontSize={"xs"}
                            fontWeight={"bold"}
                        >
                            {title}
                        </Heading>

                        <Text
                            textColor={"secondaryContrast"}
                            fontFace={"secondary"}
                            fontSize={"xxs"}
                            fontWeight={"normal"}
                        >
                            {description}
                        </Text>
                    </S.TextWrapper>

                    <S.CloseButton onClick={onClose} aria-label={"Close"}>
                        <S.CloseButtonIconWrapper>
                            <Icon familyName="Material" icon="md-close" />
                        </S.CloseButtonIconWrapper>
                    </S.CloseButton>
                </S.ToastWrapper>
            </S.DialogWrapper>
        );
    }
);

export default Toast;
