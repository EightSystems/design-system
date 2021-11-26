import * as React from "react";
import { WebImageProps } from "./types";

export const Image: React.FC<WebImageProps> = ({ src, ...otherProps }: WebImageProps) => {
    return <img src={src} {...otherProps} />;
};

export default Image;
