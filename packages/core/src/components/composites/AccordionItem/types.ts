import React from "react";
import { AccordionChildrenFuncProps } from "../Accordion/types";

export type AccordionItemProps = {
    /** Components that must be inside the`<AccordionItem>`. */
    children: React.ReactNode;

    /** Title that will be shown on this Accordion item. */
    label: string;
} & AccordionChildrenFuncProps;

export type CollapseComponentProps = {
    isOpened: boolean;
    children: React.ReactNode;
};
