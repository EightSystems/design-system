import { Platform as RNPlatform, PlatformIOSStatic } from "react-native";
import { PlatformOSType, PlatformVersionType } from "./types";

export class Platform {
    static readonly constants: any = RNPlatform.constants;
    static readonly OS: PlatformOSType = RNPlatform.OS;
    static readonly Version: PlatformVersionType = RNPlatform.Version;
    static readonly isTesting: boolean = RNPlatform.isTesting;

    static readonly isTV: boolean = RNPlatform.isTV;

    static readonly isPad: boolean = (RNPlatform as PlatformIOSStatic).isPad;

    public static select(obj: any): any {
        return RNPlatform.select(obj);
    }

    static get properties(): any {
        return {
            constants: this.constants,
            OS: this.OS,
            Version: this.Version,
            isTesting: this.isTesting,
            isTV: this.isTV,
            isPad: this.isPad,
        };
    }
}
