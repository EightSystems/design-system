import { ReactComponent as AmexSvg } from "../../../assets/icons/american-express.svg";
import { ReactComponent as CirrusSvg } from "../../../assets/icons/cirrus.svg";
import { ReactComponent as DinersSvg } from "../../../assets/icons/diners.svg";
import { ReactComponent as DiscoverSvg } from "../../../assets/icons/discover.svg";
import { ReactComponent as EloSvg } from "../../../assets/icons/elo.svg";
import { ReactComponent as HiperSvg } from "../../../assets/icons/hiper.svg";
import { ReactComponent as JcbSvg } from "../../../assets/icons/jcb.svg";
import { ReactComponent as MaestroSvg } from "../../../assets/icons/maestro.svg";
import { ReactComponent as MastercardSvg } from "../../../assets/icons/mastercard.svg";
import { ReactComponent as VisaElectronSvg } from "../../../assets/icons/visa-electron.svg";
import { ReactComponent as VisaSvg } from "../../../assets/icons/visa.svg";
import { styleIconHelper } from "../PaymentMethodItem/styled";

export const brandIconMapping = {
    amex: styleIconHelper(AmexSvg, "lg", "lg", "secondary"),
    "american-express": styleIconHelper(AmexSvg, "lg", "lg", "secondary"),
    cirrus: styleIconHelper(CirrusSvg, "lg", "lg", "secondary"),
    diners: styleIconHelper(DinersSvg, "lg", "lg", "secondary"),
    discover: styleIconHelper(DiscoverSvg, "lg", "lg", "secondary"),
    elo: styleIconHelper(EloSvg, "lg", "lg", "secondary"),
    hiper: styleIconHelper(HiperSvg, "lg", "lg", "secondary"),
    jcb: styleIconHelper(JcbSvg, "lg", "lg", "secondary"),
    mastercard: styleIconHelper(MastercardSvg, "lg", "lg", "secondary"),
    maestro: styleIconHelper(MaestroSvg, "lg", "lg", "secondary"),
    "visa-electron": styleIconHelper(VisaElectronSvg, "lg", "lg", "secondary"),
    visa: styleIconHelper(VisaSvg, "lg", "lg", "secondary"),
};
