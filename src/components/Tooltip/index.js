import React, { useState } from "react";
import styled from "styled-components";

import * as V from "../../styles/variables"

const TooltipWrapper = styled.div`
    display: inline-block;
    position: relative;

    .tooltip__tip {
        font-family: ${V.FontFaces.Inter};
        position: absolute;
        border-radius: 4px;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px;
        color: var(--background);
        background: var(--secondary);
        font-size: 14px;
        line-height: 1;
        z-index: 100;
        white-space: nowrap;
    }

    .tooltip__tip::before {
        content: " ";
        left: 50%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 6px;
        margin-left: calc(6px * -1);
    }

        .top {
            top: calc(35px * -1);
        }
        .top::before {
            top: 100%;
            border-top-color: var(--secondary);
        }
        .right {
            left: calc(100% + 35px);
            top: 50%;
            transform: translateX(0) translateY(-50%);
        }
        .right::before {
            left: calc(6px * -1);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-right-color: var(--secondary);
        }
        .bottom {
            bottom: calc(35px * -1);
        }
        .bottom::before {
            bottom: 100%;
            border-bottom-color: var(--secondary);
        }
        .left {
            left: auto;
            right: calc(100% + 35px);
            top: 50%;
            transform: translateX(0) translateY(-50%);
        }
        .left::before {
            left: auto;
            right: calc(6px * -2);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-left-color: var(--secondary);
        }
`;

const Tooltip = props => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 0);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    const performAction = () => {
        active ? hideTip() : showTip()
    }

    return (
        <TooltipWrapper onClick={performAction}>
            {props.children}
            {active && (
                <div className={`tooltip__tip ${props.direction || "top"}`}>
                    {props.content}
                </div>
            )}
        </TooltipWrapper>
    );
};

export default Tooltip;
