export class Orientation {
    public static lockToLandscape() {
        const orientation =
            window.screen && window.screen.orientation
                ? (((window.screen.orientation || {}).type ||
                      (window.screen as any).mozOrientation ||
                      (window.screen as any).msOrientation) as OrientationType)
                : "not-supported";

        if (orientation !== "not-supported") {
            if (orientation.startsWith("portrait")) {
                window.screen.orientation.lock("landscape");
            }
        } else {
            console.warn("This device doesn't support orientation changes");
        }
    }

    public static unlockAllOrientations() {
        const orientation =
            window.screen && window.screen.orientation
                ? (((window.screen.orientation || {}).type ||
                      (window.screen as any).mozOrientation ||
                      (window.screen as any).msOrientation) as OrientationType)
                : "not-supported";

        if (orientation !== "not-supported") {
            window.screen.orientation.unlock();
        } else {
            console.warn("This device doesn't support orientation changes");
        }
    }
}
