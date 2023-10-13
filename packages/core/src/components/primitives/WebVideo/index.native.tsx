import keys from "lodash/keys";
import React, { Fragment, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Platform } from "../../../utils/Platform";
import { Spinner } from "../../feedback/Spinner";
import { Text } from "../../typography/Text";
import { Image } from "../Image";
import { Orientation } from "./Orientation";
import { WebVideoContainer, WebVideoPlaceholderContainer, WebVideoPlaceholderSpinnerContainer } from "./styled.native";
import { CallbackMapping, NativeEventType, WebVideoProps } from "./types";

let WebView = null;
try {
    WebView = require("react-native-webview").default;
} catch (e) {}

export const WebVideo = React.forwardRef(
    (
        {
            options,
            source,
            rotateOnFullSreen = true,
            eventsListener = {},
            nativeVideoPlayerUrl = "https://eightsystems.github.io/design-system/assets/webvideo/webplayer.html",
            tooOldAndroidVersion,
        }: WebVideoProps,
        ref
    ) => {
        const webviewRef = useRef(null);
        const [isLoading, setIsLoading] = useState(true);
        const [isReady, setIsReady] = useState(false);
        const hasNeededAndroidVersion = Platform.OS == "android" ? Platform.isAndroidVersionGreaterThan("8.1") : true;

        useImperativeHandle(ref, () => ({
            enterFullScreen: () => {
                webviewRef.current?.injectJavaScript("enterFullScreen && enterFullScreen()");
            },
            exitFullScreen: () => {
                webviewRef.current?.injectJavaScript("exitFullScreen && exitFullScreen()");
            },
            toggleFullScreen: () => {
                webviewRef.current?.injectJavaScript("toggleFullScreen && toggleFullScreen()");
            },
        }));

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
            ready: [
                ...(eventsListener?.ready || []),
                () => {
                    setIsReady(true);
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
                {hasNeededAndroidVersion ? (
                    WebView ? (
                        <Fragment>
                            {isLoading || !isReady ? (
                                <Fragment>
                                    <WebVideoPlaceholderContainer>
                                        {source.poster ? <Image src={source.poster} layout={"fill"} /> : null}
                                    </WebVideoPlaceholderContainer>
                                    <WebVideoPlaceholderSpinnerContainer>
                                        <Spinner color={"white"} size={"xxl"} />
                                    </WebVideoPlaceholderSpinnerContainer>
                                </Fragment>
                            ) : null}

                            <WebView
                                allowsFullscreenVideo={true}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                androidLayerType={"hardware"}
                                mixedContentMode={"always"}
                                allowsInlineMediaPlayback={true}
                                startInLoadingState={true}
                                ref={webviewRef}
                                mediaPlaybackRequiresUserAction={false}
                                source={{ uri: videoPlayerUrl }}
                                onNavigationStateChange={navState => {
                                    setIsLoading(navState.loading);
                                }}
                                onMessage={messageData => {
                                    const { eventName, eventData } = JSON.parse(
                                        messageData.nativeEvent.data
                                    ) as NativeEventType;

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
                        </Fragment>
                    ) : (
                        <Text>You need to install the react-native-webview package</Text>
                    )
                ) : (
                    <Text>
                        {tooOldAndroidVersion || "Your Operating System is too old, you need at least Android 8.1"}
                    </Text>
                )}
            </WebVideoContainer>
        );
    }
);

export type { WebVideoProps } from "./types";
