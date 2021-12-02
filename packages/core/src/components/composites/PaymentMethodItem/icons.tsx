import { ReactComponent as BankSlip } from "../../../assets/icons/bank-slip.svg";
import { ReactComponent as CreditCard } from "../../../assets/icons/credit-card.svg";
import { ReactComponent as Picpay } from "../../../assets/icons/picpay.svg";
import { ReactComponent as Pix } from "../../../assets/icons/pix.svg";
import { styleIconHelper } from "./styled";

export const paymentMethodIconGroup = {
    creditCard: styleIconHelper(CreditCard),
    bankSlip: styleIconHelper(BankSlip),
    pix: styleIconHelper(Pix),
    picpay: styleIconHelper(Picpay),
};
