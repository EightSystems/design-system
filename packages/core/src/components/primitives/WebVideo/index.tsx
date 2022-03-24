import keys from "lodash/keys";
import PlyrJS from "plyr";
import Plyr from "plyr-react";
import React, { Fragment, useEffect, useImperativeHandle, useState } from "react";
import PlyrGlobalStyle from "../../../theme/plyr";
import { Orientation } from "./Orientation";
import { CallbackKeyName, CallbackMapping, WebVideoProps } from "./types";

export const WebVideo = React.forwardRef(
    ({ source, options, rotateOnFullSreen = true, eventsListener = {} }: WebVideoProps, ref) => {
        const [plyrRef, setPlyrRef] = useState<PlyrJS>(null);

        useImperativeHandle(ref, () => ({
            enterFullScreen: () => {
                if (plyrRef) {
                    plyrRef.fullscreen.enter();
                }
            },
            exitFullScreen: () => {
                if (plyrRef) {
                    plyrRef.fullscreen.exit();
                }
            },
            toggleFullScreen: () => {
                if (plyrRef) {
                    plyrRef.fullscreen.toggle();
                }
            },
        }));

        const plyrEventsListener: CallbackMapping = {
            ...eventsListener,
            enterfullscreen: [
                ...(eventsListener?.enterfullscreen || []),
                () => {
                    if (rotateOnFullSreen) {
                        Orientation.lockToLandscape();
                    }
                },
            ],
            exitfullscreen: [
                ...(eventsListener?.exitfullscreen || []),
                () => {
                    if (rotateOnFullSreen) {
                        Orientation.unlockAllOrientations();
                    }
                },
            ],
        };

        useEffect(() => {
            return () => {
                if (rotateOnFullSreen) {
                    Orientation.unlockAllOrientations();
                }
            };
        }, [rotateOnFullSreen]);

        useEffect(() => {
            if (plyrRef) {
                if (plyrEventsListener) {
                    const eventNameList = keys(plyrEventsListener) as CallbackKeyName[];
                    for (var eventName of eventNameList) {
                        for (var callbackEvent of plyrEventsListener[eventName]) {
                            plyrRef.on(eventName, callbackEvent);
                        }
                    }
                }
            }

            return () => {
                if (plyrRef) {
                    if (plyrEventsListener) {
                        const eventNameList = keys(plyrEventsListener) as CallbackKeyName[];
                        for (var eventName of eventNameList) {
                            for (var callbackEvent of plyrEventsListener[eventName]) {
                                plyrRef.off(eventName, callbackEvent);
                            }
                        }
                    }
                }
            };
        }, [plyrRef, plyrEventsListener]);

        return (
            <Fragment>
                <PlyrGlobalStyle />
                <Plyr
                    source={source}
                    options={options}
                    ref={plyr => {
                        if (plyr?.plyr instanceof PlyrJS) {
                            setPlyrRef(plyr?.plyr);
                        }
                    }}
                />
            </Fragment>
        );
    }
);
