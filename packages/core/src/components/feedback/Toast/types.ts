export type ToastProps = {
    /** Show or hide toast */
    showToast: boolean;

    /** Close button callback */
    onClose?: () => void;

    title: string;

    description: string;

    status: "info" | "success" | "warning";

    /** On native the props are transformed into `top` or `bottom`, so it will ignore the extra `left`, `center`, or `right` */
    position: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
};
