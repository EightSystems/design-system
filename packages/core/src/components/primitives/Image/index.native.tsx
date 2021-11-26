import * as React from "react";
import FlexImage, { Props as ImageProps, Source as ImageSourcePropType } from "./FlexImage.native";

export type NativeImageProps = React.Component<ImageProps> & {
    src: string | ImageSourcePropType;
    style?: any;
};

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

export const Image: React.FC<NativeImageProps> = ({ src, ...otherProps }: NativeImageProps) => {
    const imageSource = (
        isValidUrl(src)
            ? {
                  uri: src,
              }
            : src
    ) as ImageSourcePropType;

    return <FlexImage source={imageSource} {...otherProps} />;
};

export default Image;
