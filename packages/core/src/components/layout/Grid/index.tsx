import React from "react";
import styled, { css } from "styled-components";

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
        padding: ${(props: RowProps) => (props.spacing ? `${props.spacing}px` : "0px")};

        ${media.desktop`
            margin-right: -7px;

            ${(props: RowProps) =>
                props.mdSpacing
                    ? css`
                          padding: ${props.mdSpacing}px;
                      `
                    : null}
        `}

        ${media.tablet`
            margin-right: -6px;

            ${(props: RowProps) =>
                props.smSpacing
                    ? css`
                          padding: ${props.smSpacing}px;
                      `
                    : null}
        `}

        ${media.phone`
            margin-right: -5px;

            ${(props: RowProps) =>
                props.xsSpacing
                    ? css`
                          padding: ${props.xsSpacing}px;
                      `
                    : null}
        `}
    `
);

const ColBase = withMediaWatcher<any, ColProps>(
    styled(Box)`
        width: ${props => `${props.lg * colWidth}%`};
        padding-right: 8px;
        margin: ${(props: ColProps) => (props.spacing ? `${props.spacing}px` : "0px")};

        ${media.desktop`
            width: ${props => `${props.md * colWidth}%`};
            padding-right: 7px;

            ${(props: ColProps) =>
                props.mdSpacing
                    ? css`
                          margin: ${props.mdSpacing}px;
                      `
                    : null}
        `}

        ${media.tablet`
            width: ${props => `${props.sm * colWidth}%`};
            padding-right: 6px;

            ${(props: ColProps) =>
                props.smSpacing
                    ? css`
                          margin: ${props.smSpacing}px;
                      `
                    : null}
        `}

        ${media.phone`
            width: ${props => `${props.xs * colWidth}%`};
            padding-right: 5px;

            ${(props: ColProps) =>
                props.xsSpacing
                    ? css`
                          margin: ${props.xsSpacing}px;
                      `
                    : null}
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
