import React from "react";

export type ColProps = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    children: React.ReactChild;
    style?: any;
    className?: any;
};

export type RowProps = {
    children: React.ReactChild;
    style?: any;
    className?: any;
};
