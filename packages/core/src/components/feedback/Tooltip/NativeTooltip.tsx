import * as React from "react";
import { Popover } from "react-native-popper";
import { IPopoverProps } from "react-native-popper/src/types";
import { Text } from "../../typography/Text";
import * as S from "./styled.native";
import { TooltipProps } from "./types";

const Tooltip = React.memo<TooltipProps>(
    ({
        placement,
        offset = 8,
        crossOffset = 0,
        tooltipContent,
        size = "small",
        textColor = "white",
        fontFace = "primary",
        fontSize = "xs",
        fontWeight = "bold",
        children,
        ...props
    }: TooltipProps) => {
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
                <Popover.Backdrop />
                <Popover.Content>
                    <S.PopoverWrapper>
                        {typeof tooltipContent === "string" ? (
                            <Text textColor={textColor} fontFace={fontFace} fontWeight={fontWeight} fontSize={fontSize}>
                                {tooltipContent}
                            </Text>
                        ) : React.isValidElement(tooltipContent) ? (
                            tooltipContent
                        ) : null}
                    </S.PopoverWrapper>
                </Popover.Content>
            </Popover>
        );
    }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
