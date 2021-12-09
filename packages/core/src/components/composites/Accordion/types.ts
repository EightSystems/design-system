import React from "react";

export type AccordionChildrenFuncProps = {
    id?: any;
    isOpen: (index: any) => boolean;
    onClick: (index: any) => void;

    onMouseDown?: (event: any) => void;
    onFocus?: (event: any) => void;
};

export type AccordionProps = {
    /** A function that must return one or more `<AccordionItem>` components. */
    children: (props: AccordionChildrenFuncProps) => React.ReactNode;

    /** Index of the item that must be open when the component mounts for the first time. */
    initialIndex: any;
};
