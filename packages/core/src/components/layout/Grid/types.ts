import React from "react";

type ResponsiveSpacing<P> = P & {
    xsSpacing?: number;
    smSpacing?: number;
    mdSpacing?: number;
    spacing?: number;
};

export type ColProps = React.PropsWithChildren<
    ResponsiveSpacing<{
        xs: number;
        sm: number;
        md: number;
        lg: number;
        style?: any;
        className?: any;
    }>
>;

export type RowProps = React.PropsWithChildren<
    ResponsiveSpacing<{
        style?: any;
        className?: any;
    }>
>;
