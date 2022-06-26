export class Orientation {
    private static getInitialOrientation(): String {
        const orientationImport = this.getOrientationImport();
        try {
            if (orientationImport) {
                return orientationImport.getInitialOrientation();
            }
        } catch (e) {
            console.error(`Couldnt execute getInitialOrientation, please check the orientation package setup: ${e}`);
        }

        return null;
    }

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

    public static unlockAllOrientations(returnToInitial = false) {
        const orientationImport = this.getOrientationImport();
        try {
            let initialOrientation = this.getInitialOrientation();

            if (orientationImport) {
                if (returnToInitial) {
                    if (initialOrientation == "LANDSCAPE") {
                        orientationImport.lockToLandscape();
                    } else if (initialOrientation == "PORTRAIT" || initialOrientation == "PORTRAITUPSIDEDOWN") {
                        orientationImport.lockToPortrait();
                    } else {
                        orientationImport.unlockAllOrientations();
                    }
                } else {
                    orientationImport.unlockAllOrientations();
                }
            }
        } catch (e) {
            console.error(`Couldnt execute unlockAllOrientations, please check the orientation package setup: ${e}`);
        }
    }
}
