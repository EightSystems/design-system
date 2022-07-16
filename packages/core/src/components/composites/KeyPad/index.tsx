import React from "react";

import { Button } from "../../forms/Button";
import { Col } from "../../layout/Grid";
import { KeyPadRow, KeyPadContainer } from "./styled";
import { KeyPadProps } from "./types";

export const KeyPad = ({
    onButtonPressed,
    onCancelButtonPressed,
    onConfirmButtonPressed,
    onCleanButtonPressed,
    disableNumberButtons = false,
    disableConfirmButton = false,
    disableCancelButton = false,
    disableCleanButton = false,

    cancelLabel = "Cancel",
    cleanLabel = "Clear",
    confirmLabel = "Confirm",
}: KeyPadProps) => {
    const renderButtonLine = (buttons: number[]) => {
        return (
            <KeyPadRow spacing={4}>
                {buttons.map(numberValue => (
                    <Col xs={4} sm={4} md={4} lg={4} key={`keypad-${numberValue}`}>
                        <Button
                            backgroundColor={"lightTint"}
                            textColor={"darkTint"}
                            borderColor={"lightShade"}
                            fontSize={"lg"}
                            disabled={disableNumberButtons}
                            onPress={() => (onButtonPressed ? onButtonPressed(numberValue) : null)}
                        >
                            {numberValue.toString()}
                        </Button>
                    </Col>
                ))}
            </KeyPadRow>
        );
    };

    const renderLastLine = () => {
        return (
            <KeyPadRow spacing={4}>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <Button
                        onPress={onCancelButtonPressed}
                        backgroundColor={"danger"}
                        textColor={"darkContrast"}
                        fontSize={"xs"}
                        disabled={disableCancelButton}
                    >
                        {cancelLabel}
                    </Button>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <Button
                        backgroundColor={"lightTint"}
                        textColor={"darkTint"}
                        borderColor={"lightShade"}
                        fontSize={"lg"}
                        disabled={disableNumberButtons}
                        onPress={() => (onButtonPressed ? onButtonPressed(0) : null)}
                    >
                        0
                    </Button>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <Button
                        onPress={onCleanButtonPressed}
                        backgroundColor={"warning"}
                        textColor={"darkContrast"}
                        fontSize={"xs"}
                        disabled={disableCleanButton}
                    >
                        {cleanLabel}
                    </Button>
                </Col>
            </KeyPadRow>
        );
    };

    const renderConfirmLine = () => {
        return (
            <KeyPadRow spacing={4}>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Button
                        onPress={onConfirmButtonPressed}
                        backgroundColor={"success"}
                        fontFace={"primary"}
                        fontWeight={"bold"}
                        textColor={"successContrast"}
                        disabled={disableConfirmButton}
                        fontSize={"sm"}
                    >
                        {confirmLabel}
                    </Button>
                </Col>
            </KeyPadRow>
        );
    };

    return (
        <KeyPadContainer>
            {renderButtonLine([1, 2, 3])}
            {renderButtonLine([4, 5, 6])}
            {renderButtonLine([7, 8, 9])}
            {renderLastLine()}
            {renderConfirmLine()}
        </KeyPadContainer>
    );
};

export { KeyPadRow, KeyPadContainer };
export type { KeyPadProps };
