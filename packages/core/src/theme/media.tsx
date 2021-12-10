import keys from "lodash/keys";
import React from "react";
import { css } from "styled-components";

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

export const media: MediaSizes = keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {} as Record<keyof MediaSizes, MediaMethod>);

export const mediaMinWidth: MediaSizes = keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
        @media (min-width: ${emSize}em) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {} as Record<keyof MediaSizes, MediaMethod>);

export function withMediaWatcher<T, P = {}>(Component: any) {
    return React.forwardRef<T, P>((props, componentRef) => {
        return <Component {...props} ref={componentRef} />;
    });
}

export default media;
