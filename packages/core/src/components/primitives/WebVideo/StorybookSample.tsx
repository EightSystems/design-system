import React, { Fragment, useState } from "react";
import { WebVideo } from ".";
import { Platform } from "../../../utils/Platform";
import { Modal } from "../../composites/Modal";
import { Button } from "../../forms/Button";

export const WebVideoModalSample = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Fragment>
            <Button onClick={() => setIsModalOpen(true)}>Open Video Modal</Button>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} halfScreen={true}>
                <WebVideo
                    rotateOnFullSreen={Platform.OS == "web" ? false : true}
                    options={{
                        controls: [
                            "rewind",
                            "play",
                            "play-large",
                            "fast-forward",
                            "progress",
                            "current-time",
                            "duration",
                            "mute",
                            "volume",
                            "settings",
                            "fullscreen",
                        ],
                    }}
                    source={{
                        poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
                        sources: [
                            {
                                provider: "html5",
                                size: 576,
                                src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                                type: "video/mp4",
                            },
                            {
                                provider: "html5",
                                size: 720,
                                src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
                                type: "video/mp4",
                            },
                        ],
                        type: "video",
                    }}
                />
            </Modal>
        </Fragment>
    );
};
