import { Popover } from "@headlessui/react";
import * as React from "react";
import { usePopper } from "react-popper";
import * as S from "./styled";
import { WebTooltipProps } from "./types";

const Tooltip = React.forwardRef<HTMLDivElement, WebTooltipProps>(
    ({ placement, offset, crossOffset, tooltipContent, children, ...props }, componentRef) => {
        const [referenceElement, setReferenceElement] = React.useState<any>();
        const [popperElement, setPopperElement] = React.useState<any>();

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

export default React.memo(Tooltip);
