import { Popover } from "@headlessui/react";
import * as React from "react";
import { usePopper } from "react-popper";
import * as S from "./styled";
import { TooltipProps } from "./types";

const Tooltip = React.memo<TooltipProps>(
    ({
        placement,
        offset,
        crossOffset,
        tooltipContent,
        children,
        textColor = "white",
        fontFace = "primary",
        fontSize = "xs",
        fontWeight = "bold",
        ...props
    }) => {
        const [referenceElement, setReferenceElement] = React.useState<any>();
        const [popperElement, setPopperElement] = React.useState<any>();

        const styleProps = {
            "data-fontsize": fontSize,
            "data-textcolor": textColor,
            "data-fontface": fontFace,
            "data-fontweight": fontWeight,
        };

        const { styles, attributes } = usePopper(referenceElement, popperElement, {
            placement: placement,
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [crossOffset, offset],
                    },
                },
            ],
        });

        return (
            <Popover>
                {({ open }) => (
                    <React.Fragment>
                        <Popover.Button
                            style={{ width: "fit-content", height: "100%" }}
                            ref={setReferenceElement}
                            as="div"
                        >
                            {children}
                        </Popover.Button>

                        {open && (
                            <S.PopoverWrapper
                                {...props}
                                {...attributes.popper}
                                {...styleProps}
                                ref={setPopperElement}
                                style={styles.popper}
                                static
                            >
                                {typeof tooltipContent === "string" ? (
                                    <span tabIndex={0}>{tooltipContent}</span>
                                ) : (
                                    tooltipContent
                                )}
                            </S.PopoverWrapper>
                        )}
                    </React.Fragment>
                )}
            </Popover>
        );
    }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
