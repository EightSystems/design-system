import * as React from "react";
import { NativeTooltipProps } from "./types";
import { IPopoverProps } from "react-native-popper/src/types";

import { Tooltip as PopperTooltip } from "react-native-popper";

/**
 *  @todo
 *
 * - Stabilize the "offset" prop for both components. Web takes an array with two numbers, native takes a single number (maybe remove the one number from the web, as the placement property makes it kind of redundant.)
 *
 * - Test the component and styling on native, including repositioning after scrolling and out-of-bounds behavior.
 */
const Tooltip = React.forwardRef<any, NativeTooltipProps>(
    ({ placement, offset, tooltipContent, children, ...props }) => {
        const [isVisible, setIsVisible] = React.useState<any>(false);

        function getTransformedPlacementName(placementName: string): IPopoverProps["placement"] | any {
            const splitPlacementName = placementName.split("-");

            if (splitPlacementName.length != 1) {
                return splitPlacementName.join(" ");
            } else {
                return placementName;
            }
        }

        return (
            <PopperTooltip
                {...props}
                isOpen={isVisible}
                onOpenChange={setIsVisible}
                placement={getTransformedPlacementName(placement)}
                trigger={children}
            >
                <PopperTooltip.Content>{tooltipContent}</PopperTooltip.Content>
            </PopperTooltip>
        );
    }
);

export default React.memo(Tooltip);
