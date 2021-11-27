import * as React from "react";
import { WebImageProps } from "./types";

export const Image: React.FC<WebImageProps> = ({ src, alt = "", ...otherProps }: WebImageProps) => {
    return <img src={src} alt={alt} {...otherProps} />;
};

export default Image;
