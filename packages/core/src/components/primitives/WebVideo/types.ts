import { Options, SourceInfo } from "plyr";

export type WebVideoProps = {
    source?: SourceInfo | undefined;
    options?: Options | undefined;

    /** Replaces the native webview URL used for rendering the player */
    nativeVideoPlayerUrl?: string;
};
