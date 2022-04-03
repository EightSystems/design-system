import { PlatformOSType, PlatformVersionType } from "./types";

export class Platform {
    static readonly constants: any = {};
    static readonly OS: PlatformOSType = "web";
    static readonly Version: PlatformVersionType = "n/a";
    static get isTesting(): boolean {
        if (process.env.NODE_ENV === "test") {
            return true;
        }
        return false;
    }

    static get isTV(): boolean {
        if (
            navigator.userAgent.match(
                /GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i
            )
        ) {
            return true;
        }
        if (navigator.userAgent.match(/Xbox|PLAYSTATION.3|PLAYSTATION.4|PLAYSTATION.5|Wii/i)) {
            return true;
        }

        return false;
    }

    static get isPad(): boolean {
        return navigator.userAgent.match(/iP(a|ro)d/i) ? true : false;
    }

    public static select(obj: any): any {
        return "web" in obj ? obj.web : obj.default || {};
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
        return false;
    }

    static isIOSVersionGreaterThan(expectedIOSVersion): boolean {
        return false;
    }
}
