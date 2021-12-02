export type PaymentMethodItemProps = {
    /** Payment method title. */
    title: string;

    /** Payment method description.  */
    description?: string;

    /** Icon that must be used in the payment method item. */
    icon: "creditCard" | "bankSlip" | "pix" | "picpay";

    /** Function that must be fired when onClick prop is declared. */
    onClick: () => void;
};
