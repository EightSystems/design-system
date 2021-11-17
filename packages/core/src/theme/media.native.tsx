import React from "react";
import { css } from "styled-components";
import { useWindowDimensions } from "react-native";

const sizes = {
    giant: 1440,
    bigDesktop: 1200,
    desktop: 1000,
    tablet: 768,
    thone: 600,
    phablet: 480,
    phone: 376,
    tiny: 330,
};

type MediaMethod = (...args: any) => any;

export type MediaSizes = {
    giant: MediaMethod;
    bigDesktop: MediaMethod;
    desktop: MediaMethod;
    tablet: MediaMethod;
    thone: MediaMethod;
    phablet: MediaMethod;
    phone: MediaMethod;
    tiny: MediaMethod;
};

export const media: MediaSizes = Object.keys(sizes).reduce((accumulator, label) => {
    const pxSize = sizes[label];
    accumulator[label] = (...args) => css`
        ${props => (props["data-Window-Width"] <= pxSize ? css(...args) : null)}
    `;

    return accumulator;
}, {} as Record<keyof MediaSizes, MediaMethod>);

export const mediaMinWidth: MediaSizes = Object.keys(sizes).reduce((accumulator, label) => {
    const pxSize = sizes[label];
    accumulator[label] = (...args) => css`
        ${props => (props["data-Window-Width"] >= pxSize ? css(...args) : null)}
    `;

    return accumulator;
}, {} as Record<keyof MediaSizes, MediaMethod>);

export function withMediaWatcher<T, P = {}>(Component: any) {
    return React.forwardRef<T, P>((props, componentRef) => {
        const window = useWindowDimensions();
        const extraProps = {
            ...props,
            "data-Window-Width": window.width,
            "data-Window-Height": window.height,
            "data-Window-Scale": window.scale,
            "data-Window-Font-Scale": window.fontScale,
        };

        return <Component {...extraProps} ref={componentRef} />;
    });
}

export default media;
