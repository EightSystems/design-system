import PlyrJS from "plyr";
import Plyr from "plyr-react";
import React, { Fragment, useEffect, useState } from "react";
import PlyrGlobalStyle from "../../../theme/plyr";
import { CallbackKeyName, CallbackMapping, WebVideoProps } from "./types";

export const WebVideo = ({ source, options, rotateOnFullSreen = true, eventsListener }: WebVideoProps) => {
    const [plyrRef, setPlyrRef] = useState<PlyrJS>(null);
    const plyrEventsListener: CallbackMapping = {
        ...eventsListener,
        enterfullscreen: [
            ...(eventsListener?.enterfullscreen || []),
            () => {
                const orientation =
                    window.screen && window.screen.orientation
                        ? (((window.screen.orientation || {}).type ||
                              (window.screen as any).mozOrientation ||
                              (window.screen as any).msOrientation) as OrientationType)
                        : "not-supported";

                if (orientation != "not-supported") {
                    if (rotateOnFullSreen) {
                        if (orientation.startsWith("portrait")) {
                            setTimeout(() => {
                                window.screen.orientation.lock("landscape");
                            }, 500);
                        }
                    }
                }
            },
        ],
        exitfullscreen: [
            ...(eventsListener?.exitfullscreen || []),
            () => {
                const orientation =
                    window.screen && window.screen.orientation
                        ? (((window.screen.orientation || {}).type ||
                              (window.screen as any).mozOrientation ||
                              (window.screen as any).msOrientation) as OrientationType)
                        : "not-supported";

                if (orientation != "not-supported") {
                    if (rotateOnFullSreen) {
                        window.screen.orientation.unlock();
                    }
                }
            },
        ],
    };

    useEffect(() => {
        if (plyrRef) {
            if (plyrEventsListener) {
                const eventNameList = Object.keys(plyrEventsListener) as CallbackKeyName[];
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
                    const eventNameList = Object.keys(plyrEventsListener) as CallbackKeyName[];
                    for (var eventName of eventNameList) {
                        for (var callbackEvent of plyrEventsListener[eventName]) {
                            plyrRef.off(eventName, callbackEvent);
                        }
                    }
                }
            }
        };
    }, [plyrRef, eventsListener]);

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
};
