export type PaymentStatusProps = {
    /** Defines the current payment status. */
    status: "approved" | "refused" | "pending";

    /** Defines the title for the payment status. */
    title: string;

    /** Defines the description for the payment status. */
    description: string;

    /** The monetary unit that will be used in the conversion. The possible values are ISO 4217 currency codes,
     * like "USD" for the American dollar, or "BRL" for Brazillian real. You can look at the availbale currency codes
     * [here](https://www.currency-iso.org/dam/downloads/lists/list_one.xml) */
    currency?: string;

    /** The value that will be used in the conversion, in numeric format. */
    value?: number;
};
