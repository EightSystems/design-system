/*
 * Taken from https://github.com/kodefox/react-native-flex-image
 * Author: KodeFox, Inc.
 * Changelog:
 * - Use `useNativeDriver` with the animated methods
 */

import React, { Component, ReactNode } from "react";
import {
    ActivityIndicator,
    Animated,
    Image,
    ImageStyle,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
// @ts-ignore
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

type Cancellable = {
    cancel: () => void;
};

export type Source = number | { uri: string; width?: number; height?: number };

export type Props = {
    source: Source;
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    thumbnailStyle?: StyleProp<ImageStyle>;
    loadingComponent?: ReactNode;
    onPress?: () => void;
    thumbnail?: Source;
    loadingMethod?: "spinner" | "progressive";
    errorComponent?: ReactNode;
};

type State = {
    isLoading: boolean;
    ratio: number;
    error: string;
    thumbnailOpacity: Animated.Value;
};

export default class FlexImage extends Component<Props, State> {
    _pendingGetSize: Cancellable | null = null;

    state = {
        isLoading: true,
        ratio: -1,
        error: "",
        thumbnailOpacity: new Animated.Value(0),
    };

    componentDidMount() {
        let { source, thumbnail, loadingMethod } = this.props;
        let ratio = -1;
        let error = "";
        let isLoading = true;

        let src = thumbnail && loadingMethod === "progressive" ? thumbnail : source;
        if (typeof src === "number") {
            let imageSource: {
                width: number | null;
                height: number | null;
            } | null = resolveAssetSource(src);
            if (imageSource) {
                let { width, height } = imageSource;
                if (width && height) {
                    ratio = width / height;
                }
            } else {
                error = "Error: Failed to retrieve width and height of the image";
            }
            isLoading = false;
        } else {
            this._pendingGetSize = getImageSize(src, this._onLoadSuccess, this._onLoadFail);
        }

        this.setState({
            ratio,
            isLoading,
            error,
        });
    }

    componentWillUnmount() {
        if (this._pendingGetSize) {
            this._pendingGetSize.cancel();
        }
    }

    render() {
        let {
            source,
            style,
            onPress,
            loadingComponent,
            thumbnail,
            loadingMethod,
            errorComponent,
            imageStyle = {},
            thumbnailStyle = {},
            ...otherProps
        } = this.props;
        let { isLoading, ratio, error, thumbnailOpacity } = this.state;

        if (isLoading && loadingMethod !== "progressive") {
            let loadingIndicator = loadingComponent || <ActivityIndicator size="large" />;
            return <View style={[{ justifyContent: "center", alignItems: "center" }, style]}>{loadingIndicator}</View>;
        }

        if (error) {
            return (
                <View style={[{ justifyContent: "center", alignItems: "center" }, style]}>
                    {errorComponent ? errorComponent : <Text>{error}</Text>}
                </View>
            );
        }

        let imageSource: Source | null = null;
        if (typeof source === "number") {
            imageSource = source;
        } else {
            // eslint-disable-next-line no-unused-vars
            let { uri, width, height, ...other } = source;
            imageSource = { uri, ...other };
        }

        return (
            <TouchableOpacity onPress={onPress} disabled={!onPress} style={[{ aspectRatio: ratio }, style]}>
                {thumbnail && loadingMethod === "progressive" && (
                    <Animated.Image
                        {...otherProps}
                        source={thumbnail}
                        style={{
                            width: "100%",
                            height: "100%",
                            opacity: thumbnailOpacity,
                            zIndex: 1,
                            ...(thumbnailStyle as any),
                        }}
                        onLoad={this._onThumbnailLoad}
                        testID="progressiveThumbnail"
                    />
                )}
                <Animated.Image
                    {...otherProps}
                    source={imageSource}
                    style={{ width: "100%", height: "100%", position: "absolute", ...(imageStyle as any) }}
                    onLoad={this._onLoad}
                />
            </TouchableOpacity>
        );
    }

    _onThumbnailLoad = () => {
        Animated.timing(this.state.thumbnailOpacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    _onLoad = () => {
        Animated.timing(this.state.thumbnailOpacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    _onLoadSuccess = (width: number, height: number) => {
        let ratio = width / height;
        this.setState({
            isLoading: false,
            ratio,
        });
    };

    _onLoadFail = (error: Error) => {
        this.setState({
            isLoading: false,
            error: "Error: " + error.message,
        });
    };
}

// A cancellable version of Image.getSize
export function getImageSize(
    source: { uri: string },
    onSuccess: (width: number, height: number) => void,
    onFail: (error: Error) => void
) {
    let isCancelled = false;
    Image.getSize(
        source.uri,
        (width: number, height: number) => {
            if (!isCancelled) {
                onSuccess(width, height);
            }
        },
        (error: Error) => {
            if (!isCancelled) {
                onFail(error);
            }
        }
    );
    return {
        cancel: () => {
            isCancelled = true;
        },
    };
}
