import * as React from "react";
import { NativeTooltipProps } from "./types";
import { IPopoverProps } from "react-native-popper/src/types";

import { Popover } from "react-native-popper";
import { Text } from "../../typography/Text/index.native";

const Tooltip = ({
    placement,
    offset = 8,
    crossOffset = 0,
    tooltipContent,
    size = "small",
    textColor = "primaryContrast",
    fontFace,
    fontWeight,
    fontSize,
    children,
    ...props
}: NativeTooltipProps) => {
    function getTransformedPlacementName(placementName: string): IPopoverProps["placement"] | any {
        const splitPlacementName = placementName.split("-");

        if (splitPlacementName.length != 1) {
            return splitPlacementName.join(" ");
        } else {
            return placementName;
        }
    }

    return (
        <Popover
            {...props}
            offset={offset}
            crossOffset={crossOffset}
            placement={placement ? getTransformedPlacementName(placement) : "bottom"}
            trigger={children}
            data-size={size}
        >
            <Popover.Content>
                {typeof tooltipContent === "string" ? (
                    <Text textColor={textColor} fontFace={fontFace} fontWeight={fontWeight} fontSize={fontSize}>
                        {tooltipContent}
                    </Text>
                ) : React.isValidElement(tooltipContent) ? (
                    React.Children.map(children, (child: JSX.Element, index: number) => {
                        return React.cloneElement(child, {
                            key: `tooltip-${index}`,
                            ...child.props,
                        });
                    })
                ) : null}
            </Popover.Content>
        </Popover>
    );
};

export default React.memo(Tooltip);
