import { Platform as RNPlatform, PlatformIOSStatic } from "react-native";
import { PlatformOSType, PlatformVersionType } from "./types";
import { semverCompare } from "./utils";

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

    static isAndroidVersionGreaterThan(expectedAndroidVersion): boolean {
        if (Platform.OS == "android") {
            return semverCompare(Platform.constants["Release"], expectedAndroidVersion) >= 0;
        }

        return false;
    }

    static isIOSVersionGreaterThan(expectedIOSVersion): boolean {
        if (Platform.OS == "ios") {
            return semverCompare(Platform.Version as string, expectedIOSVersion) >= 0;
        }

        return false;
    }
}
