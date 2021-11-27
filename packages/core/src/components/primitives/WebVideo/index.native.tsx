import React from "react";
import WebView from "react-native-webview";
import { WebVideoContainer } from "./styled.native";
import { WebVideoProps } from "./types";

export const WebVideo = ({
    options,
    source,
    nativeVideoPlayerUrl = "https://eightsystems.github.io/design-system/assets/webvideo/webplayer.html",
}: WebVideoProps) => {
    const videoPlayerUrl = `${nativeVideoPlayerUrl}?options=${encodeURIComponent(
        JSON.stringify(options)
    )}&source=${encodeURIComponent(JSON.stringify(source))}`;

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
            />
        </WebVideoContainer>
    );
};

export type { WebVideoProps } from "./types";
