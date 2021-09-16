import React from "react";
import styled from "styled-components";

import media, { withMediaWatcher } from "../../../theme/media";
import Box from "../Box";
import { ColProps, RowProps } from "./types";

const colWidth = 100 / 12;

export const Row = withMediaWatcher<any, RowProps>(
    styled(Box)`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: -8px;

        ${media.desktop`
            margin-right: -7px;
        `}

        ${media.tablet`
            margin-right: -6px;
        `}

        ${media.phone`
            margin-right: -5px;
        `}
    `
);

const ColBase = withMediaWatcher<any, ColProps>(
    styled(Box)`
        width: ${props => `${props.lg * colWidth}%`};
        padding-right: 8px;

        ${media.desktop`
            width: ${props => `${props.md * colWidth}%`};
            padding-right: 7px;
        `}

        ${media.tablet`
            width: ${props => `${props.sm * colWidth}%`};
            padding-right: 6px;
        `}

        ${media.phone`
            width: ${props => `${props.xs * colWidth}%`};
            padding-right: 5px;
        `}
    `
);

export const Col = ({ xs = 12, sm = 12, md = 12, lg = 12, children, ...restProps }: ColProps) => {
    return (
        <ColBase xs={xs} sm={sm} md={md} lg={lg} {...restProps}>
            {children}
        </ColBase>
    );
};

export type { ColProps, RowProps };
