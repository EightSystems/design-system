export type KeyPadProps = {
    onButtonPressed?: (numberValue: number) => void;
    onCancelButtonPressed?: () => void;
    onConfirmButtonPressed?: () => void;
    onCleanButtonPressed?: () => void;
    disableNumberButtons?: boolean;
    disableConfirmButton?: boolean;
    disableCancelButton?: boolean;
    disableCleanButton?: boolean;

    cancelLabel?: string;
    cleanLabel?: string;
    confirmLabel?: string;
};
