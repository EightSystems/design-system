import React from "react";
import { storiesOf } from "@storybook/react";

import Avatar from "../components/Avatar";

storiesOf("Avatar", module).add("Avatar (Image/Large)", () => (
    <Avatar
        alt="Alt for the image component"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
        size="large"
    />
));

storiesOf("Avatar", module).add("Avatar (Image/Medium)", () => (
    <Avatar
        alt="Alt for the image component"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
        size="medium"
    />
));

storiesOf("Avatar", module).add("Avatar (Image/Small)", () => (
    <Avatar
        alt="Alt for the image component"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
        size="small"
    />
));

storiesOf("Avatar", module).add("Avatar (No-image/Large)", () => (
    <Avatar size="large">
        EL
    </Avatar>
));

storiesOf("Avatar", module).add("Avatar (No-image/Medium)", () => (
    <Avatar size="medium">
        EL
    </Avatar>
));

storiesOf("Avatar", module).add("Avatar (No-image/Small)", () => (
    <Avatar size="small">
        EL
    </Avatar>
));
