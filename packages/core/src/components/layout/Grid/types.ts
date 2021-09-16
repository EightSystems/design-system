import React from "react";

export type ColProps = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    children: React.ReactChildren | React.ReactChild;
    style?: any;
    className?: any;
};

export type RowProps = {
    children: React.ReactChildren | React.ReactChild;
    style?: any;
    className?: any;
};
