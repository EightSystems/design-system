import React, { useState } from "react";
import { Box } from "../../layout/Box";
import { AccordionProps } from "./types";

export const Accordion = ({ children, initialIndex = 0 }: AccordionProps) => {
    const [currentIndexOpen, setCurrentIndexOpen] = useState(initialIndex);

    const setCurrentIndex = currentIndex => setCurrentIndexOpen(currentIndex === currentIndexOpen ? -1 : currentIndex);

    return (
        <Box>
            {children &&
                children({
                    isOpen: index => index === currentIndexOpen,
                    onClick: index => setCurrentIndex(index),
                })}
        </Box>
    );
};

export default Accordion;
