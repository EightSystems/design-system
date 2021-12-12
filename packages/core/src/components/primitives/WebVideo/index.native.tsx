import keys from "lodash/keys";
import React, { useEffect } from "react";
import { Text } from "../../typography/Text";
import { Orientation } from "./Orientation";
import { WebVideoContainer } from "./styled.native";
import { CallbackMapping, NativeEventType, WebVideoProps } from "./types";

let WebView = null;
try {
    WebView = require("react-native-webview").default;
} catch (e) {}

export const WebVideo = ({
    options,
    source,
    rotateOnFullSreen = true,
    eventsListener = {},
    nativeVideoPlayerUrl = "https://eightsystems.github.io/design-system/assets/webvideo/webplayer.html",
}: WebVideoProps) => {
    const plyrEventsListener: CallbackMapping = {
        ...eventsListener,
        enterfullscreen: [
            ...(eventsListener?.enterfullscreen || []),
            () => {
                if (rotateOnFullSreen) {
                    Orientation.lockToLandscape();
                }
            },
        ],
        exitfullscreen: [
            ...(eventsListener?.exitfullscreen || []),
            () => {
                if (rotateOnFullSreen) {
                    Orientation.unlockAllOrientations();
                }
            },
        ],
    };

    const videoPlayerUrl = `${nativeVideoPlayerUrl}?options=${encodeURIComponent(
        JSON.stringify(options)
    )}&source=${encodeURIComponent(JSON.stringify(source))}&events=${encodeURIComponent(
        JSON.stringify(keys(plyrEventsListener))
    )}`;

    useEffect(() => {
        return () => {
            if (rotateOnFullSreen) {
                Orientation.unlockAllOrientations();
            }
        };
    }, [rotateOnFullSreen]);

    return (
        <WebVideoContainer>
            {WebView ? (
                <WebView
                    allowsFullscreenVideo={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    androidLayerType={"hardware"}
                    mixedContentMode={"always"}
                    allowsInlineMediaPlayback={true}
                    mediaPlaybackRequiresUserAction={false}
                    source={{ uri: videoPlayerUrl }}
                    onMessage={messageData => {
                        const { eventName, eventData } = JSON.parse(messageData.nativeEvent.data) as NativeEventType;

                        if (plyrEventsListener[eventName]) {
                            for (var callbackEvent of plyrEventsListener[eventName]) {
                                try {
                                    callbackEvent(eventData);
                                } catch (e) {
                                    console.error(`Event ${eventName} failed with error: ${e}`);
                                }
                            }
                        }
                    }}
                />
            ) : (
                <Text>You need to install the react-native-webview package</Text>
            )}
        </WebVideoContainer>
    );
};

export type { WebVideoProps } from "./types";
