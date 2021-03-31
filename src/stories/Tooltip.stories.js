import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../components/Button";
import Tooltip from "../components/Tooltip";

const config = {
    modifiers: [
        {
            name: "offset",
            options: {
                offset: [0, 8],
            },
        },
        {
            name: "arrow",
            options: {
                element: "[data-popper-arrow]",
            },
        },
    ],
    placement: "top",
};

// @todo: Make this explicitly visible in the documentation for Tooltip component.
// Available placement options:
/*  'top-start',
'top',
'top-end',
'right-end',
'right',
'right-start',
'bottom-end',
'bottom',
'bottom-start',
'left-end',
'left',
'left-start',  */

const variableConfig = placement => {
    return {
        ...config,
        placement: placement,
    };
};

// @todo: replace with an Icon later
const ButtonWrapper = props => (
    <Button color="danger" outline={false} {...props}>
        Hover over me
    </Button>
);

storiesOf("Atoms|Tooltip", module).add("Top-Start", () => (
    <Tooltip config={variableConfig("top-start")} component={ButtonWrapper}>
        Hi, I'm a tooltip!
    </Tooltip>
));

storiesOf("Atoms|Tooltip", module).add("Top-Mid", () => (
    <Tooltip config={variableConfig("top")} component={ButtonWrapper}>
        Hi, I'm a tooltip!
    </Tooltip>
));

storiesOf("Atoms|Tooltip", module).add("Top-End", () => (
    <Tooltip config={variableConfig("top-end")} component={ButtonWrapper}>
        Hi, I'm a tooltip!
    </Tooltip>
));
