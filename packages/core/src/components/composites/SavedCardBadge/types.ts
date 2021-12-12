import { ButtonProps } from "../../forms/Button/types";

export const brandNameMapping = {
    amex: "American Express",
    "american-express": "American Express",
    cirrus: "Cirrus",
    diners: "Diners Club",
    discover: "Discover",
    elo: "ELO",
    hiper: "Hipercard",
    jcb: "JCB",
    mastercard: "MasterCard",
    maestro: "Maestro",
    "visa-electron": "Visa Electron",
    visa: "Visa",
};

type BrandNameKey =
    | "amex"
    | "american-express"
    | "cirrus"
    | "diners"
    | "discover"
    | "elo"
    | "hiper"
    | "jcb"
    | "mastercard"
    | "maestro"
    | "visa-electron"
    | "visa";

export type SavedCardBadgeProps = {
    cardBrand: BrandNameKey;
    cardIdentifier?: string;
    cardLastDigits?: string;
    onClick: ButtonProps["onClick"];
};
