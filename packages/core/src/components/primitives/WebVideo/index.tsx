import PlyrJS from "plyr";
import Plyr from "plyr-react";
import React, { Fragment } from "react";
import PlyrGlobalStyle from "../../../theme/plyr";

export type WebVideoProps = {
    source?: PlyrJS.SourceInfo | undefined;
    options?: PlyrJS.Options | undefined;
};

export const WebVideo = (props: WebVideoProps) => {
    return (
        <Fragment>
            <PlyrGlobalStyle />
            <Plyr {...props} />
        </Fragment>
    );
};
