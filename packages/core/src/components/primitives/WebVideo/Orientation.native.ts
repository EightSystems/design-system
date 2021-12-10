export class Orientation {
    private static getOrientationImport(): any {
        try {
            return require("react-native-orientation-locker").default;
        } catch (e) {
            try {
                return require("react-native-orientation").default;
            } catch (e) {
                console.error("You either need react-native-orientation or react-native-orientation-locker setup");
            }
        }

        return null;
    }

    public static lockToLandscape() {
        const orientationImport = this.getOrientationImport();
        try {
            if (orientationImport) {
                orientationImport.lockToLandscapeLeft();
            }
        } catch (e) {
            console.error(`Couldnt execute lockToLandscape, please check the orientation package setup: ${e}`);
        }
    }

    public static unlockAllOrientations() {
        const orientationImport = this.getOrientationImport();
        try {
            if (orientationImport) {
                orientationImport.unlockAllOrientations();
            }
        } catch (e) {
            console.error(`Couldnt execute unlockAllOrientations, please check the orientation package setup: ${e}`);
        }
    }
}
