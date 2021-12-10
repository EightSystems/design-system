import React from "react";
import { Icon } from "../../primitives/Icon";
import { Heading } from "../../typography/Heading";
import { Text } from "../../typography/Text";
import * as C from "./common.styled";
import * as S from "./styled";
import { ToastBodyProps } from "./types";

export const ToastBody = React.forwardRef<any, ToastBodyProps>(
    (
        {
            title,
            description,
            status = "info",
            onClose = () => null,
            rightElement,
            leftElement,
            backgroundColor,
            textColor = "secondaryContrast",
        },
        componentRef
    ) => {
        return (
            <S.ToastWrapper
                ref={componentRef}
                backgroundColor={
                    backgroundColor
                        ? backgroundColor
                        : status === "info"
                        ? "secondary"
                        : status === "warning"
                        ? "danger"
                        : "successShade"
                }
                padding={"sm"}
            >
                <C.ContextIconWrapper>
                    {leftElement ? (
                        leftElement
                    ) : status === "info" ? (
                        <Icon size={"lg"} color={textColor} familyName="Material" icon="md-info" />
                    ) : status === "success" ? (
                        <Icon size={"lg"} color={textColor} familyName="Material" icon="md-check-circle" />
                    ) : (
                        <Icon size={"lg"} color={textColor} familyName="Material" icon="md-error" />
                    )}
                </C.ContextIconWrapper>

                <C.TextWrapper>
                    <Heading textColor={textColor} fontFace={"secondary"} fontSize={"xs"} fontWeight={"bold"}>
                        {title}
                    </Heading>

                    <Text textColor={textColor} fontFace={"secondary"} fontSize={"xxs"} fontWeight={"normal"}>
                        {description}
                    </Text>
                </C.TextWrapper>

                <S.CloseButton onClick={rightElement ? null : onClose} aria-label={"Close"}>
                    <C.CloseButtonIconWrapper>
                        {rightElement ? (
                            rightElement
                        ) : (
                            <Icon size={"sm"} color={textColor} familyName="Material" icon="md-close" />
                        )}
                    </C.CloseButtonIconWrapper>
                </S.CloseButton>
            </S.ToastWrapper>
        );
    }
);
