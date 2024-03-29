import * as React from "react";
import { WebImageProps } from "./types";

export const Image: React.FC<WebImageProps> = ({
    src,
    alt = "",
    unoptimized = false,
    placeholder = "empty",
    quality = 75,
    layout = "responsive",
    thumbnailStyle,
    imageStyle,
    ...otherProps
}: WebImageProps) => {
    return <img src={src} alt={alt} {...otherProps} />;
};

export default Image;
