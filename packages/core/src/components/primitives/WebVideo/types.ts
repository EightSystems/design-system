import { Html5EventMap, Options, SourceInfo, StandardEventMap, YoutubeEventMap } from "plyr";

export type EventCallback = (eventData: any) => void;

export type CallbackKeyName = keyof StandardEventMap | keyof Html5EventMap | keyof YoutubeEventMap;
export type CallbackMapping = Partial<
    {
        [key in CallbackKeyName]: EventCallback[];
    }
>;

export type NativeEventType = {
    eventName: CallbackKeyName;
    eventData: any;
};

export type WebVideoProps = {
    source?: SourceInfo | undefined;
    options?: Options | undefined;

    /**
     * Enables the rotation to landscape mode on supported devices when going to fullscreen.
     * This doesn't work on Storybook as storybook redraws itself on screen rotations.
     * On Native you need to register the `enterfullscreen` and `exitfullscreen` events listener and handle the orientation changes yourself.
     * Check out https://github.com/wonday/react-native-orientation-locker for orientation locking guidance.
     * */
    rotateOnFullSreen?: boolean;

    eventsListener?: CallbackMapping;

    /** Replaces the native webview URL used for rendering the player */
    nativeVideoPlayerUrl?: string;

    tooOldAndroidVersion?: string;
};
