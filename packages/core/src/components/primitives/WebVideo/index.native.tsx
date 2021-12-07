import React from "react";
import WebView from "react-native-webview";
import { WebVideoContainer } from "./styled.native";
import { NativeEventType, WebVideoProps } from "./types";

export const WebVideo = ({
    options,
    source,
    rotateOnFullSreen = true,
    eventsListener,
    nativeVideoPlayerUrl = "https://eightsystems.github.io/design-system/assets/webvideo/webplayer.html",
}: WebVideoProps) => {
    const videoPlayerUrl = `${nativeVideoPlayerUrl}?options=${encodeURIComponent(
        JSON.stringify(options)
    )}&source=${encodeURIComponent(JSON.stringify(source))}&events=${encodeURIComponent(
        JSON.stringify(Object.keys(eventsListener))
    )}`;

    return (
        <WebVideoContainer>
            <WebView
                userAgent={
                    "Mozilla/5.0 (Linux; Android 11; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36"
                }
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

                    if (eventsListener[eventName]) {
                        for (var callbackEvent of eventsListener[eventName]) {
                            try {
                                callbackEvent(eventData);
                            } catch (e) {
                                console.error(`Event ${eventName} failed with error: ${e}`);
                            }
                        }
                    }
                }}
            />
        </WebVideoContainer>
    );
};

export type { WebVideoProps } from "./types";
