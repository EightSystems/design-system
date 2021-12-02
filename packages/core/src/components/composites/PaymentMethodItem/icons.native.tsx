import React from "react";
import BankSlip from "../../../assets/icons/bank-slip.svg";
import CreditCard from "../../../assets/icons/credit-card.svg";
import Picpay from "../../../assets/icons/picpay.svg";
import Pix from "../../../assets/icons/pix.svg";
import { styleIconHelper } from "./styled";

const styleIcon = IconComponent => {
    return () => <IconComponent width={30} height={30} />;
};

export const paymentMethodIconGroup = {
    creditCard: styleIconHelper(CreditCard),
    bankSlip: styleIconHelper(BankSlip),
    pix: styleIconHelper(Pix),
    picpay: styleIconHelper(Picpay),
};
