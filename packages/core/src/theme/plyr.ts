import { createGlobalStyle } from "styled-components";

export const PlyrGlobalStyle = createGlobalStyle`
    @keyframes plyr-progress {
        to {
            background-position: 25px 0;
            background-position: var(--plyr-progress-loading-size, 25px) 0
        }
    }

    @keyframes plyr-popup {
        0% {
            opacity: .5;
            transform: translateY(10px)
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }

    @keyframes plyr-fade-in {
        0% {
            opacity: 0
        }
        to {
            opacity: 1
        }
    }

    .plyr {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        align-items: center;
        direction: ltr;
        display: flex;
        flex-direction: column;
        font-family: inherit;
        font-family: ${({ theme }) => theme.typography.fontFaces.primary};
        font-variant-numeric: tabular-nums;
        font-weight: 400;
        font-weight: var(--plyr-font-weight-regular, 400);
        line-height: 1.7;
        line-height: var(--plyr-line-height, 1.7);
        max-width: 100%;
        min-width: 200px;
        position: relative;
        text-shadow: none;
        transition: box-shadow .3s ease;
        z-index: 0
    }

    .plyr audio,
    .plyr iframe,
    .plyr video {
        display: block;
        height: 100%;
        width: 100%
    }

    .plyr button {
        font: inherit;
        line-height: inherit;
        width: auto
    }

    .plyr:focus {
        outline: 0
    }

    .plyr--full-ui {
        box-sizing: border-box
    }

    .plyr--full-ui *,
    .plyr--full-ui :after,
    .plyr--full-ui :before {
        box-sizing: inherit
    }

    .plyr--full-ui a,
    .plyr--full-ui button,
    .plyr--full-ui input,
    .plyr--full-ui label {
        touch-action: manipulation
    }

    .plyr__badge {
        background: #4a5464;
        background: var(--plyr-badge-background, #4a5464);
        border-radius: 2px;
        border-radius: var(--plyr-badge-border-radius, 2px);
        color: #fff;
        color: var(--plyr-badge-text-color, #fff);
        font-size: 9px;
        font-size: var(--plyr-font-size-badge, 9px);
        line-height: 1;
        padding: 3px 4px
    }

    .plyr--full-ui ::-webkit-media-text-track-container {
        display: none
    }

    .plyr__captions {
        animation: plyr-fade-in .3s ease;
        bottom: 0;
        display: none;
        font-size: 13px;
        font-size: var(--plyr-font-size-small, 13px);
        left: 0;
        padding: 10px;
        padding: var(--plyr-control-spacing, 10px);
        position: absolute;
        text-align: center;
        transition: transform .4s ease-in-out;
        width: 100%
    }

    .plyr__captions span:empty {
        display: none
    }

    @media (min-width:480px) {
        .plyr__captions {
            font-size: 15px;
            font-size: var(--plyr-font-size-base, 15px);
            padding: 20px;
            padding: calc(var(--plyr-control-spacing, 10px)*2)
        }
    }

    @media (min-width:768px) {
        .plyr__captions {
            font-size: 18px;
            font-size: var(--plyr-font-size-large, 18px)
        }
    }

    .plyr--captions-active .plyr__captions {
        display: block
    }

    .plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions {
        transform: translateY(-40px);
        transform: translateY(calc(var(--plyr-control-spacing, 10px)*-4))
    }

    .plyr__caption {
        background: rgba(0, 0, 0, .8);
        background: var(--plyr-captions-background, rgba(0, 0, 0, .8));
        border-radius: 2px;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        color: #fff;
        color: var(--plyr-captions-text-color, #fff);
        line-height: 185%;
        padding: .2em .5em;
        white-space: pre-wrap
    }

    .plyr__caption div {
        display: inline
    }

    .plyr__control {
        background: transparent;
        border: 0;
        border-radius: 3px;
        border-radius: var(--plyr-control-radius, 3px);
        color: inherit;
        cursor: pointer;
        flex-shrink: 0;
        overflow: visible;
        padding: 7px;
        padding: calc(var(--plyr-control-spacing, 10px)*.7);
        position: relative;
        transition: all .3s ease
    }

    .plyr__control svg {
        fill: currentColor;
        display: block;
        height: 18px;
        height: var(--plyr-control-icon-size, 18px);
        pointer-events: none;
        width: 18px;
        width: var(--plyr-control-icon-size, 18px)
    }

    .plyr__control:focus {
        outline: 0
    }

    .plyr__control.plyr__tab-focus {
        outline-color: #00b3ff;
        outline-color: var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        outline-offset: 2px;
        outline-style: dotted;
        outline-width: 3px
    }

    a.plyr__control {
        text-decoration: none
    }

    .plyr__control.plyr__control--pressed .icon--not-pressed,
    .plyr__control.plyr__control--pressed .label--not-pressed,
    .plyr__control:not(.plyr__control--pressed) .icon--pressed,
    .plyr__control:not(.plyr__control--pressed) .label--pressed,
    a.plyr__control:after,
    a.plyr__control:before {
        display: none
    }

    .plyr--full-ui ::-webkit-media-controls {
        display: none
    }

    .plyr__controls {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        text-align: center
    }

    .plyr__controls .plyr__progress__container {
        flex: 1;
        min-width: 0
    }

    .plyr__controls .plyr__controls__item {
        margin-left: 2.5px;
        margin-left: calc(var(--plyr-control-spacing, 10px)/4)
    }

    .plyr__controls .plyr__controls__item:first-child {
        margin-left: 0;
        margin-right: auto
    }

    .plyr__controls .plyr__controls__item.plyr__progress__container {
        padding-left: 2.5px;
        padding-left: calc(var(--plyr-control-spacing, 10px)/4)
    }

    .plyr__controls .plyr__controls__item.plyr__time {
        padding: 0 5px;
        padding: 0 calc(var(--plyr-control-spacing, 10px)/2)
    }

    .plyr__controls .plyr__controls__item.plyr__progress__container:first-child,
    .plyr__controls .plyr__controls__item.plyr__time+.plyr__time,
    .plyr__controls .plyr__controls__item.plyr__time:first-child {
        padding-left: 0
    }

    .plyr [data-plyr=airplay],
    .plyr [data-plyr=captions],
    .plyr [data-plyr=fullscreen],
    .plyr [data-plyr=pip],
    .plyr__controls:empty {
        display: none
    }

    .plyr--airplay-supported [data-plyr=airplay],
    .plyr--captions-enabled [data-plyr=captions],
    .plyr--fullscreen-enabled [data-plyr=fullscreen],
    .plyr--pip-supported [data-plyr=pip] {
        display: inline-block
    }

    .plyr__menu {
        display: flex;
        position: relative
    }

    .plyr__menu .plyr__control svg {
        transition: transform .3s ease
    }

    .plyr__menu .plyr__control[aria-expanded=true] svg {
        transform: rotate(90deg)
    }

    .plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip {
        display: none
    }

    .plyr__menu__container {
        animation: plyr-popup .2s ease;
        background: hsla(0, 0%, 100%, .9);
        background: var(--plyr-menu-background, hsla(0, 0%, 100%, .9));
        border-radius: 4px;
        bottom: 100%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
        box-shadow: var(--plyr-menu-shadow, 0 1px 2px rgba(0, 0, 0, .15));
        color: #4a5464;
        color: var(--plyr-menu-color, #4a5464);
        font-size: 15px;
        font-size: var(--plyr-font-size-base, 15px);
        margin-bottom: 10px;
        position: absolute;
        right: -3px;
        text-align: left;
        white-space: nowrap;
        z-index: 3
    }

    .plyr__menu__container>div {
        overflow: hidden;
        transition: height .35s cubic-bezier(.4, 0, .2, 1), width .35s cubic-bezier(.4, 0, .2, 1)
    }

    .plyr__menu__container:after {
        border: 4px solid transparent;
        border-top: var(--plyr-menu-arrow-size, 4px) solid hsla(0, 0%, 100%, .9);
        border-width: var(--plyr-menu-arrow-size, 4px);
        content: "";
        height: 0;
        position: absolute;
        right: 14px;
        right: calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7 - var(--plyr-menu-arrow-size, 4px)/2);
        top: 100%;
        width: 0
    }

    .plyr__menu__container [role=menu] {
        padding: 7px;
        padding: calc(var(--plyr-control-spacing, 10px)*.7)
    }

    .plyr__menu__container [role=menuitem],
    .plyr__menu__container [role=menuitemradio] {
        margin-top: 2px
    }

    .plyr__menu__container [role=menuitem]:first-child,
    .plyr__menu__container [role=menuitemradio]:first-child {
        margin-top: 0
    }

    .plyr__menu__container .plyr__control {
        align-items: center;
        color: #4a5464;
        color: var(--plyr-menu-color, #4a5464);
        display: flex;
        font-size: 13px;
        font-size: var(--plyr-font-size-menu, var(--plyr-font-size-small, 13px));
        padding: 4.66667px 10.5px;
        padding: calc(var(--plyr-control-spacing, 10px)*.7/1.5) calc(var(--plyr-control-spacing, 10px)*.7*1.5);
        -webkit-user-select: none;
        user-select: none;
        width: 100%
    }

    .plyr__menu__container .plyr__control>span {
        align-items: inherit;
        display: flex;
        width: 100%
    }

    .plyr__menu__container .plyr__control:after {
        border: 4px solid transparent;
        border: var(--plyr-menu-item-arrow-size, 4px) solid transparent;
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }

    .plyr__menu__container .plyr__control--forward {
        padding-right: 28px;
        padding-right: calc(var(--plyr-control-spacing, 10px)*.7*4)
    }

    .plyr__menu__container .plyr__control--forward:after {
        border-left-color: #728197;
        border-left-color: var(--plyr-menu-arrow-color, #728197);
        right: 6.5px;
        right: calc(var(--plyr-control-spacing, 10px)*.7*1.5 - var(--plyr-menu-item-arrow-size, 4px))
    }

    .plyr__menu__container .plyr__control--forward.plyr__tab-focus:after,
    .plyr__menu__container .plyr__control--forward:hover:after {
        border-left-color: currentColor
    }

    .plyr__menu__container .plyr__control--back {
        font-weight: 400;
        font-weight: var(--plyr-font-weight-regular, 400);
        margin: 7px;
        margin: calc(var(--plyr-control-spacing, 10px)*.7);
        margin-bottom: 3.5px;
        margin-bottom: calc(var(--plyr-control-spacing, 10px)*.7/2);
        padding-left: 28px;
        padding-left: calc(var(--plyr-control-spacing, 10px)*.7*4);
        position: relative;
        width: calc(100% - 14px);
        width: calc(100% - var(--plyr-control-spacing, 10px)*.7*2)
    }

    .plyr__menu__container .plyr__control--back:after {
        border-right-color: #728197;
        border-right-color: var(--plyr-menu-arrow-color, #728197);
        left: 6.5px;
        left: calc(var(--plyr-control-spacing, 10px)*.7*1.5 - var(--plyr-menu-item-arrow-size, 4px))
    }

    .plyr__menu__container .plyr__control--back:before {
        background: #dcdfe5;
        background: var(--plyr-menu-back-border-color, #dcdfe5);
        box-shadow: 0 1px 0 #fff;
        box-shadow: 0 1px 0 var(--plyr-menu-back-border-shadow-color, #fff);
        content: "";
        height: 1px;
        left: 0;
        margin-top: 3.5px;
        margin-top: calc(var(--plyr-control-spacing, 10px)*.7/2);
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 100%
    }

    .plyr__menu__container .plyr__control--back.plyr__tab-focus:after,
    .plyr__menu__container .plyr__control--back:hover:after {
        border-right-color: currentColor
    }

    .plyr__menu__container .plyr__control[role=menuitemradio] {
        padding-left: 7px;
        padding-left: calc(var(--plyr-control-spacing, 10px)*.7)
    }

    .plyr__menu__container .plyr__control[role=menuitemradio]:after,
    .plyr__menu__container .plyr__control[role=menuitemradio]:before {
        border-radius: 100%
    }

    .plyr__menu__container .plyr__control[role=menuitemradio]:before {
        background: rgba(0, 0, 0, .1);
        content: "";
        display: block;
        flex-shrink: 0;
        height: 16px;
        margin-right: 10px;
        margin-right: var(--plyr-control-spacing, 10px);
        transition: all .3s ease;
        width: 16px
    }

    .plyr__menu__container .plyr__control[role=menuitemradio]:after {
        background: #fff;
        border: 0;
        height: 6px;
        left: 12px;
        opacity: 0;
        top: 50%;
        transform: translateY(-50%) scale(0);
        transition: transform .3s ease, opacity .3s ease;
        width: 6px
    }

    .plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:before {
        background: #00b3ff;
        background: var(--plyr-control-toggle-checked-background, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)))
    }

    .plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:after {
        opacity: 1;
        transform: translateY(-50%) scale(1)
    }

    .plyr__menu__container .plyr__control[role=menuitemradio].plyr__tab-focus:before,
    .plyr__menu__container .plyr__control[role=menuitemradio]:hover:before {
        background: rgba(35, 40, 47, .1)
    }

    .plyr__menu__container .plyr__menu__value {
        align-items: center;
        display: flex;
        margin-left: auto;
        margin-right: calc(-7px - -2);
        margin-right: calc(var(--plyr-control-spacing, 10px)*.7*-1 - -2);
        overflow: hidden;
        padding-left: 24.5px;
        padding-left: calc(var(--plyr-control-spacing, 10px)*.7*3.5);
        pointer-events: none
    }

    .plyr--full-ui input[type=range] {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        border-radius: 26px;
        border-radius: calc(var(--plyr-range-thumb-height, 13px)*2);
        color: #00b3ff;
        color: var(--plyr-range-fill-background, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        display: block;
        height: 19px;
        height: calc(var(--plyr-range-thumb-active-shadow-width, 3px)*2 + var(--plyr-range-thumb-height, 13px));
        margin: 0;
        min-width: 0;
        padding: 0;
        transition: box-shadow .3s ease;
        width: 100%
    }

    .plyr--full-ui input[type=range]::-webkit-slider-runnable-track {
        background: transparent;
        background-image: linear-gradient(90deg, currentColor 0, transparent 0);
        background-image: linear-gradient(to right, currentColor var(--value, 0), transparent var(--value, 0));
        border: 0;
        border-radius: 2.5px;
        border-radius: calc(var(--plyr-range-track-height, 5px)/2);
        height: 5px;
        height: var(--plyr-range-track-height, 5px);
        -webkit-transition: box-shadow .3s ease;
        transition: box-shadow .3s ease;
        -webkit-user-select: none;
        user-select: none
    }

    .plyr--full-ui input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #fff;
        background: var(--plyr-range-thumb-background, #fff);
        border: 0;
        border-radius: 100%;
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2));
        height: 13px;
        height: var(--plyr-range-thumb-height, 13px);
        margin-top: -4px;
        margin-top: calc(var(--plyr-range-thumb-height, 13px)/2*-1 - var(--plyr-range-track-height, 5px)/2*-1);
        position: relative;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        width: 13px;
        width: var(--plyr-range-thumb-height, 13px)
    }

    .plyr--full-ui input[type=range]::-moz-range-track {
        background: transparent;
        border: 0;
        border-radius: 2.5px;
        border-radius: calc(var(--plyr-range-track-height, 5px)/2);
        height: 5px;
        height: var(--plyr-range-track-height, 5px);
        -moz-transition: box-shadow .3s ease;
        transition: box-shadow .3s ease;
        user-select: none
    }

    .plyr--full-ui input[type=range]::-moz-range-thumb {
        background: #fff;
        background: var(--plyr-range-thumb-background, #fff);
        border: 0;
        border-radius: 100%;
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2));
        height: 13px;
        height: var(--plyr-range-thumb-height, 13px);
        position: relative;
        -moz-transition: all .2s ease;
        transition: all .2s ease;
        width: 13px;
        width: var(--plyr-range-thumb-height, 13px)
    }

    .plyr--full-ui input[type=range]::-moz-range-progress {
        background: currentColor;
        border-radius: 2.5px;
        border-radius: calc(var(--plyr-range-track-height, 5px)/2);
        height: 5px;
        height: var(--plyr-range-track-height, 5px)
    }

    .plyr--full-ui input[type=range]::-ms-track {
        color: transparent
    }

    .plyr--full-ui input[type=range]::-ms-fill-upper,
    .plyr--full-ui input[type=range]::-ms-track {
        background: transparent;
        border: 0;
        border-radius: 2.5px;
        border-radius: calc(var(--plyr-range-track-height, 5px)/2);
        height: 5px;
        height: var(--plyr-range-track-height, 5px);
        -ms-transition: box-shadow .3s ease;
        transition: box-shadow .3s ease;
        user-select: none
    }

    .plyr--full-ui input[type=range]::-ms-fill-lower {
        background: transparent;
        background: currentColor;
        border: 0;
        border-radius: 2.5px;
        border-radius: calc(var(--plyr-range-track-height, 5px)/2);
        height: 5px;
        height: var(--plyr-range-track-height, 5px);
        -ms-transition: box-shadow .3s ease;
        transition: box-shadow .3s ease;
        user-select: none
    }

    .plyr--full-ui input[type=range]::-ms-thumb {
        background: #fff;
        background: var(--plyr-range-thumb-background, #fff);
        border: 0;
        border-radius: 100%;
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2));
        height: 13px;
        height: var(--plyr-range-thumb-height, 13px);
        margin-top: 0;
        position: relative;
        -ms-transition: all .2s ease;
        transition: all .2s ease;
        width: 13px;
        width: var(--plyr-range-thumb-height, 13px)
    }

    .plyr--full-ui input[type=range]::-ms-tooltip {
        display: none
    }

    .plyr--full-ui input[type=range]:focus {
        outline: 0
    }

    .plyr--full-ui input[type=range]::-moz-focus-outer {
        border: 0
    }

    .plyr--full-ui input[type=range].plyr__tab-focus::-webkit-slider-runnable-track {
        outline-color: #00b3ff;
        outline-color: var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        outline-offset: 2px;
        outline-style: dotted;
        outline-width: 3px
    }

    .plyr--full-ui input[type=range].plyr__tab-focus::-moz-range-track {
        outline-color: #00b3ff;
        outline-color: var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        outline-offset: 2px;
        outline-style: dotted;
        outline-width: 3px
    }

    .plyr--full-ui input[type=range].plyr__tab-focus::-ms-track {
        outline-color: #00b3ff;
        outline-color: var(--plyr-tab-focus-color, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        outline-offset: 2px;
        outline-style: dotted;
        outline-width: 3px
    }

    .plyr__poster {
        background-color: #000;
        background-color: var(--plyr-video-background, var(--plyr-video-background, #000));
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: opacity .2s ease;
        width: 100%;
        z-index: 1
    }

    .plyr--stopped.plyr__poster-enabled .plyr__poster {
        opacity: 1
    }

    .plyr--youtube.plyr--paused.plyr__poster-enabled:not(.plyr--stopped) .plyr__poster {
        display: none
    }

    .plyr__time {
        font-size: 13px;
        font-size: var(--plyr-font-size-time, var(--plyr-font-size-small, 13px))
    }

    .plyr__time+.plyr__time:before {
        content: "⁄";
        margin-right: 10px;
        margin-right: var(--plyr-control-spacing, 10px)
    }

    @media (max-width:767px) {
        .plyr__time+.plyr__time {
            display: none
        }
    }

    .plyr__tooltip {
        background: hsla(0, 0%, 100%, .9);
        background: var(--plyr-tooltip-background, hsla(0, 0%, 100%, .9));
        border-radius: 3px;
        border-radius: var(--plyr-tooltip-radius, 3px);
        bottom: 100%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
        box-shadow: var(--plyr-tooltip-shadow, 0 1px 2px rgba(0, 0, 0, .15));
        color: #4a5464;
        color: var(--plyr-tooltip-color, #4a5464);
        font-size: 13px;
        font-size: var(--plyr-font-size-small, 13px);
        font-weight: 400;
        font-weight: var(--plyr-font-weight-regular, 400);
        left: 50%;
        line-height: 1.3;
        margin-bottom: 10px;
        margin-bottom: calc(var(--plyr-control-spacing, 10px)/2*2);
        opacity: 0;
        padding: 5px 7.5px;
        padding: calc(var(--plyr-control-spacing, 10px)/2) calc(var(--plyr-control-spacing, 10px)/2*1.5);
        pointer-events: none;
        position: absolute;
        transform: translate(-50%, 10px) scale(.8);
        transform-origin: 50% 100%;
        transition: transform .2s ease .1s, opacity .2s ease .1s;
        white-space: nowrap;
        z-index: 2
    }

    .plyr__tooltip:before {
        border-left: 4px solid transparent;
        border-left: var(--plyr-tooltip-arrow-size, 4px) solid transparent;
        border-right: 4px solid transparent;
        border-right: var(--plyr-tooltip-arrow-size, 4px) solid transparent;
        border-top: 4px solid hsla(0, 0%, 100%, .9);
        border-top: var(--plyr-tooltip-arrow-size, 4px) solid var(--plyr-tooltip-background, hsla(0, 0%, 100%, .9));
        bottom: -4px;
        bottom: calc(var(--plyr-tooltip-arrow-size, 4px)*-1);
        content: "";
        height: 0;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 0;
        z-index: 2
    }

    .plyr .plyr__control.plyr__tab-focus .plyr__tooltip,
    .plyr .plyr__control:hover .plyr__tooltip,
    .plyr__tooltip--visible {
        opacity: 1;
        transform: translate(-50%) scale(1)
    }

    .plyr .plyr__control:hover .plyr__tooltip {
        z-index: 3
    }

    .plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip,
    .plyr__controls>.plyr__control:first-child .plyr__tooltip {
        left: 0;
        transform: translateY(10px) scale(.8);
        transform-origin: 0 100%
    }

    .plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip:before,
    .plyr__controls>.plyr__control:first-child .plyr__tooltip:before {
        left: 16px;
        left: calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7)
    }

    .plyr__controls>.plyr__control:last-child .plyr__tooltip {
        left: auto;
        right: 0;
        transform: translateY(10px) scale(.8);
        transform-origin: 100% 100%
    }

    .plyr__controls>.plyr__control:last-child .plyr__tooltip:before {
        left: auto;
        right: 16px;
        right: calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7);
        transform: translateX(50%)
    }

    .plyr__controls>.plyr__control:first-child+.plyr__control.plyr__tab-focus .plyr__tooltip,
    .plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,
    .plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,
    .plyr__controls>.plyr__control:first-child.plyr__tab-focus .plyr__tooltip,
    .plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,
    .plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,
    .plyr__controls>.plyr__control:last-child.plyr__tab-focus .plyr__tooltip,
    .plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,
    .plyr__controls>.plyr__control:last-child:hover .plyr__tooltip {
        transform: translate(0) scale(1)
    }

    .plyr__progress {
        left: 6.5px;
        left: calc(var(--plyr-range-thumb-height, 13px)*.5);
        margin-right: 13px;
        margin-right: var(--plyr-range-thumb-height, 13px);
        position: relative
    }

    .plyr__progress__buffer,
    .plyr__progress input[type=range] {
        margin-left: -6.5px;
        margin-left: calc(var(--plyr-range-thumb-height, 13px)*-.5);
        margin-right: -6.5px;
        margin-right: calc(var(--plyr-range-thumb-height, 13px)*-.5);
        width: calc(100% + 13px);
        width: calc(100% + var(--plyr-range-thumb-height, 13px))
    }

    .plyr__progress input[type=range] {
        position: relative;
        z-index: 2
    }

    .plyr__progress .plyr__tooltip {
        font-size: 13px;
        font-size: var(--plyr-font-size-time, var(--plyr-font-size-small, 13px));
        left: 0
    }

    .plyr__progress__buffer {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        border-radius: 100px;
        height: 5px;
        height: var(--plyr-range-track-height, 5px);
        left: 0;
        margin-top: -2.5px;
        margin-top: calc(var(--plyr-range-track-height, 5px)/2*-1);
        padding: 0;
        position: absolute;
        top: 50%
    }

    .plyr__progress__buffer::-webkit-progress-bar {
        background: transparent
    }

    .plyr__progress__buffer::-webkit-progress-value {
        background: currentColor;
        border-radius: 100px;
        min-width: 5px;
        min-width: var(--plyr-range-track-height, 5px);
        -webkit-transition: width .2s ease;
        transition: width .2s ease
    }

    .plyr__progress__buffer::-moz-progress-bar {
        background: currentColor;
        border-radius: 100px;
        min-width: 5px;
        min-width: var(--plyr-range-track-height, 5px);
        -moz-transition: width .2s ease;
        transition: width .2s ease
    }

    .plyr__progress__buffer::-ms-fill {
        border-radius: 100px;
        -ms-transition: width .2s ease;
        transition: width .2s ease
    }

    .plyr--loading .plyr__progress__buffer {
        animation: plyr-progress 1s linear infinite;
        background-image: linear-gradient(-45deg, rgba(35, 40, 47, .6) 25%, transparent 0, transparent 50%, rgba(35, 40, 47, .6) 0, rgba(35, 40, 47, .6) 75%, transparent 0, transparent);
        background-image: linear-gradient(-45deg, var(--plyr-progress-loading-background, rgba(35, 40, 47, .6)) 25%, transparent 25%, transparent 50%, var(--plyr-progress-loading-background, rgba(35, 40, 47, .6)) 50%, var(--plyr-progress-loading-background, rgba(35, 40, 47, .6)) 75%, transparent 75%, transparent);
        background-repeat: repeat-x;
        background-size: 25px 25px;
        background-size: var(--plyr-progress-loading-size, 25px) var(--plyr-progress-loading-size, 25px);
        color: transparent
    }

    .plyr--video.plyr--loading .plyr__progress__buffer {
        background-color: hsla(0, 0%, 100%, .25);
        background-color: var(--plyr-video-progress-buffered-background, hsla(0, 0%, 100%, .25))
    }

    .plyr--audio.plyr--loading .plyr__progress__buffer {
        background-color: rgba(193, 200, 209, .6);
        background-color: var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, .6))
    }

    .plyr__volume {
        align-items: center;
        display: flex;
        max-width: 110px;
        min-width: 80px;
        position: relative;
        width: 20%
    }

    .plyr__volume input[type=range] {
        margin-left: 5px;
        margin-left: calc(var(--plyr-control-spacing, 10px)/2);
        margin-right: 5px;
        margin-right: calc(var(--plyr-control-spacing, 10px)/2);
        position: relative;
        z-index: 2
    }

    .plyr--is-ios .plyr__volume {
        min-width: 0;
        width: auto
    }

    .plyr--audio {
        display: block
    }

    .plyr--audio .plyr__controls {
        background: #fff;
        background: var(--plyr-audio-controls-background, #fff);
        border-radius: inherit;
        color: #4a5464;
        color: var(--plyr-audio-control-color, #4a5464);
        padding: 10px;
        padding: var(--plyr-control-spacing, 10px)
    }

    .plyr--audio .plyr__control.plyr__tab-focus,
    .plyr--audio .plyr__control:hover,
    .plyr--audio .plyr__control[aria-expanded=true] {
        background: #00b3ff;
        background: var(--plyr-audio-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        color: #fff;
        color: var(--plyr-audio-control-color-hover, #fff)
    }

    .plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track {
        background-color: rgba(193, 200, 209, .6);
        background-color: var(--plyr-audio-range-track-background, var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, .6)))
    }

    .plyr--full-ui.plyr--audio input[type=range]::-moz-range-track {
        background-color: rgba(193, 200, 209, .6);
        background-color: var(--plyr-audio-range-track-background, var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, .6)))
    }

    .plyr--full-ui.plyr--audio input[type=range]::-ms-track {
        background-color: rgba(193, 200, 209, .6);
        background-color: var(--plyr-audio-range-track-background, var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, .6)))
    }

    .plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb {
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2), 0 0 0 3px rgba(35, 40, 47, .1);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(35, 40, 47, .1))
    }

    .plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb {
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2), 0 0 0 3px rgba(35, 40, 47, .1);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(35, 40, 47, .1))
    }

    .plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb {
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2), 0 0 0 3px rgba(35, 40, 47, .1);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, rgba(35, 40, 47, .1))
    }

    .plyr--audio .plyr__progress__buffer {
        color: rgba(193, 200, 209, .6);
        color: var(--plyr-audio-progress-buffered-background, rgba(193, 200, 209, .6))
    }

    .plyr--video {
        background: #000;
        background: var(--plyr-video-background, var(--plyr-video-background, #000));
        overflow: hidden
    }

    .plyr--video.plyr--menu-open {
        overflow: visible
    }

    .plyr__video-wrapper {
        background: #000;
        background: var(--plyr-video-background, var(--plyr-video-background, #000));
        height: 100%;
        margin: auto;
        overflow: hidden;
        position: relative;
        width: 100%
    }

    .plyr__video-embed,
    .plyr__video-wrapper--fixed-ratio {
        aspect-ratio: 16/9
    }

    @supports not (aspect-ratio:16/9) {
        .plyr__video-embed,
        .plyr__video-wrapper--fixed-ratio {
            height: 0;
            padding-bottom: 56.25%;
            position: relative
        }
    }

    .plyr__video-embed iframe,
    .plyr__video-wrapper--fixed-ratio video {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%
    }

    .plyr--full-ui .plyr__video-embed>.plyr__video-embed__container {
        padding-bottom: 240%;
        position: relative;
        transform: translateY(-38.28125%)
    }

    .plyr--video .plyr__controls {
        background: linear-gradient(transparent, rgba(0, 0, 0, .75));
        background: var(--plyr-video-controls-background, linear-gradient(transparent, rgba(0, 0, 0, .75)));
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        bottom: 0;
        color: #fff;
        color: var(--plyr-video-control-color, #fff);
        left: 0;
        padding: 5px;
        padding: calc(var(--plyr-control-spacing, 10px)/2);
        padding-top: 20px;
        padding-top: calc(var(--plyr-control-spacing, 10px)*2);
        position: absolute;
        right: 0;
        transition: opacity .4s ease-in-out, transform .4s ease-in-out;
        z-index: 3
    }

    @media (min-width:480px) {
        .plyr--video .plyr__controls {
            padding: 10px;
            padding: var(--plyr-control-spacing, 10px);
            padding-top: 35px;
            padding-top: calc(var(--plyr-control-spacing, 10px)*3.5)
        }
    }

    .plyr--video.plyr--hide-controls .plyr__controls {
        opacity: 0;
        pointer-events: none;
        transform: translateY(100%)
    }

    .plyr--video .plyr__control.plyr__tab-focus,
    .plyr--video .plyr__control:hover,
    .plyr--video .plyr__control[aria-expanded=true] {
        background: #00b3ff;
        background: var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        color: #fff;
        color: var(--plyr-video-control-color-hover, #fff)
    }

    .plyr__control--overlaid {
        background: #00b3ff;
        background: var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, #00b3ff)));
        border: 0;
        border-radius: 100%;
        color: #fff;
        color: var(--plyr-video-control-color, #fff);
        display: none;
        left: 50%;
        opacity: .9;
        padding: 15px;
        padding: calc(var(--plyr-control-spacing, 10px)*1.5);
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: .3s;
        z-index: 2
    }

    .plyr__control--overlaid svg {
        left: 2px;
        position: relative
    }

    .plyr__control--overlaid:focus,
    .plyr__control--overlaid:hover {
        opacity: 1
    }

    .plyr--playing .plyr__control--overlaid {
        opacity: 0;
        visibility: hidden
    }

    .plyr--full-ui.plyr--video .plyr__control--overlaid {
        display: block
    }

    .plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track {
        background-color: hsla(0, 0%, 100%, .25);
        background-color: var(--plyr-video-range-track-background, var(--plyr-video-progress-buffered-background, hsla(0, 0%, 100%, .25)))
    }

    .plyr--full-ui.plyr--video input[type=range]::-moz-range-track {
        background-color: hsla(0, 0%, 100%, .25);
        background-color: var(--plyr-video-range-track-background, var(--plyr-video-progress-buffered-background, hsla(0, 0%, 100%, .25)))
    }

    .plyr--full-ui.plyr--video input[type=range]::-ms-track {
        background-color: hsla(0, 0%, 100%, .25);
        background-color: var(--plyr-video-range-track-background, var(--plyr-video-progress-buffered-background, hsla(0, 0%, 100%, .25)))
    }

    .plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb {
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2), 0 0 0 3px hsla(0, 0%, 100%, .5);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, hsla(0, 0%, 100%, .5))
    }

    .plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb {
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2), 0 0 0 3px hsla(0, 0%, 100%, .5);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, hsla(0, 0%, 100%, .5))
    }

    .plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb {
        box-shadow: 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2), 0 0 0 3px hsla(0, 0%, 100%, .5);
        box-shadow: var(--plyr-range-thumb-shadow, 0 1px 1px rgba(35, 40, 47, .15), 0 0 0 1px rgba(35, 40, 47, .2)), 0 0 0 var(--plyr-range-thumb-active-shadow-width, 3px) var(--plyr-audio-range-thumb-active-shadow-color, hsla(0, 0%, 100%, .5))
    }

    .plyr--video .plyr__progress__buffer {
        color: hsla(0, 0%, 100%, .25);
        color: var(--plyr-video-progress-buffered-background, hsla(0, 0%, 100%, .25))
    }

    .plyr:fullscreen {
        background: #000;
        border-radius: 0!important;
        height: 100%;
        margin: 0;
        width: 100%
    }

    .plyr:fullscreen video {
        height: 100%
    }

    .plyr:fullscreen .plyr__control .icon--exit-fullscreen {
        display: block
    }

    .plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg {
        display: none
    }

    .plyr:fullscreen.plyr--hide-controls {
        cursor: none
    }

    @media (min-width:1024px) {
        .plyr:-webkit-full-screen .plyr__captions {
            font-size: 21px;
            font-size: var(--plyr-font-size-xlarge, 21px)
        }
        .plyr:fullscreen .plyr__captions {
            font-size: 21px;
            font-size: var(--plyr-font-size-xlarge, 21px)
        }
    }

    .plyr:-webkit-full-screen {
        background: #000;
        border-radius: 0!important;
        height: 100%;
        margin: 0;
        width: 100%
    }

    .plyr:-webkit-full-screen video {
        height: 100%
    }

    .plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen {
        display: block
    }

    .plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg {
        display: none
    }

    .plyr:-webkit-full-screen.plyr--hide-controls {
        cursor: none
    }

    @media (min-width:1024px) {
        .plyr:-webkit-full-screen .plyr__captions {
            font-size: 21px;
            font-size: var(--plyr-font-size-xlarge, 21px)
        }
    }

    .plyr:-moz-full-screen {
        background: #000;
        border-radius: 0!important;
        height: 100%;
        margin: 0;
        width: 100%
    }

    .plyr:-moz-full-screen video {
        height: 100%
    }

    .plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen {
        display: block
    }

    .plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen+svg {
        display: none
    }

    .plyr:-moz-full-screen.plyr--hide-controls {
        cursor: none
    }

    @media (min-width:1024px) {
        .plyr:-moz-full-screen .plyr__captions {
            font-size: 21px;
            font-size: var(--plyr-font-size-xlarge, 21px)
        }
    }

    .plyr:-ms-fullscreen {
        background: #000;
        border-radius: 0!important;
        height: 100%;
        margin: 0;
        width: 100%
    }

    .plyr:-ms-fullscreen video {
        height: 100%
    }

    .plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen {
        display: block
    }

    .plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg {
        display: none
    }

    .plyr:-ms-fullscreen.plyr--hide-controls {
        cursor: none
    }

    @media (min-width:1024px) {
        .plyr:-ms-fullscreen .plyr__captions {
            font-size: 21px;
            font-size: var(--plyr-font-size-xlarge, 21px)
        }
    }

    .plyr--fullscreen-fallback {
        background: #000;
        border-radius: 0!important;
        bottom: 0;
        display: block;
        height: 100%;
        left: 0;
        margin: 0;
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 10000000
    }

    .plyr--fullscreen-fallback video {
        height: 100%
    }

    .plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen {
        display: block
    }

    .plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg {
        display: none
    }

    .plyr--fullscreen-fallback.plyr--hide-controls {
        cursor: none
    }

    @media (min-width:1024px) {
        .plyr--fullscreen-fallback .plyr__captions {
            font-size: 21px;
            font-size: var(--plyr-font-size-xlarge, 21px)
        }
    }

    .plyr__ads {
        border-radius: inherit;
        bottom: 0;
        cursor: pointer;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1
    }

    .plyr__ads>div,
    .plyr__ads>div iframe {
        height: 100%;
        position: absolute;
        width: 100%
    }

    .plyr__ads:after {
        background: #23282f;
        border-radius: 2px;
        bottom: 10px;
        bottom: var(--plyr-control-spacing, 10px);
        color: #fff;
        content: attr(data-badge-text);
        font-size: 11px;
        padding: 2px 6px;
        pointer-events: none;
        position: absolute;
        right: 10px;
        right: var(--plyr-control-spacing, 10px);
        z-index: 3
    }

    .plyr__ads:empty:after {
        display: none
    }

    .plyr__cues {
        background: currentColor;
        display: block;
        height: 5px;
        height: var(--plyr-range-track-height, 5px);
        left: 0;
        margin: -var(--plyr-range-track-height, 5px)/2 0 0;
        opacity: .8;
        position: absolute;
        top: 50%;
        width: 3px;
        z-index: 3
    }

    .plyr__preview-thumb {
        background-color: hsla(0, 0%, 100%, .9);
        background-color: var(--plyr-tooltip-background, hsla(0, 0%, 100%, .9));
        border-radius: 3px;
        bottom: 100%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
        box-shadow: var(--plyr-tooltip-shadow, 0 1px 2px rgba(0, 0, 0, .15));
        margin-bottom: 10px;
        margin-bottom: calc(var(--plyr-control-spacing, 10px)/2*2);
        opacity: 0;
        padding: 3px;
        padding: var(--plyr-tooltip-radius, 3px);
        pointer-events: none;
        position: absolute;
        transform: translateY(10px) scale(.8);
        transform-origin: 50% 100%;
        transition: transform .2s ease .1s, opacity .2s ease .1s;
        z-index: 2
    }

    .plyr__preview-thumb--is-shown {
        opacity: 1;
        transform: translate(0) scale(1)
    }

    .plyr__preview-thumb:before {
        border-left: 4px solid transparent;
        border-left: var(--plyr-tooltip-arrow-size, 4px) solid transparent;
        border-right: 4px solid transparent;
        border-right: var(--plyr-tooltip-arrow-size, 4px) solid transparent;
        border-top: 4px solid hsla(0, 0%, 100%, .9);
        border-top: var(--plyr-tooltip-arrow-size, 4px) solid var(--plyr-tooltip-background, hsla(0, 0%, 100%, .9));
        bottom: -4px;
        bottom: calc(var(--plyr-tooltip-arrow-size, 4px)*-1);
        content: "";
        height: 0;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 0;
        z-index: 2
    }

    .plyr__preview-thumb__image-container {
        background: #c1c8d1;
        border-radius: 2px;
        border-radius: calc(var(--plyr-tooltip-radius, 3px) - 1px);
        overflow: hidden;
        position: relative;
        z-index: 0
    }

    .plyr__preview-thumb__image-container img {
        height: 100%;
        left: 0;
        max-height: none;
        max-width: none;
        position: absolute;
        top: 0;
        width: 100%
    }

    .plyr__preview-thumb__time-container {
        bottom: 6px;
        left: 0;
        position: absolute;
        right: 0;
        white-space: nowrap;
        z-index: 3
    }

    .plyr__preview-thumb__time-container span {
        background-color: rgba(0, 0, 0, .55);
        border-radius: 2px;
        border-radius: calc(var(--plyr-tooltip-radius, 3px) - 1px);
        color: #fff;
        font-size: 13px;
        font-size: var(--plyr-font-size-time, var(--plyr-font-size-small, 13px));
        padding: 3px 6px
    }

    .plyr__preview-scrubbing {
        bottom: 0;
        filter: blur(1px);
        height: 100%;
        left: 0;
        margin: auto;
        opacity: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        transition: opacity .3s ease;
        width: 100%;
        z-index: 1
    }

    .plyr__preview-scrubbing--is-shown {
        opacity: 1
    }

    .plyr__preview-scrubbing img {
        height: 100%;
        left: 0;
        max-height: none;
        max-width: none;
        -o-object-fit: contain;
        object-fit: contain;
        position: absolute;
        top: 0;
        width: 100%
    }

    .plyr--no-transition {
        transition: none!important
    }

    .plyr__sr-only {
        clip: rect(1px, 1px, 1px, 1px);
        border: 0!important;
        height: 1px!important;
        overflow: hidden;
        padding: 0!important;
        position: absolute!important;
        width: 1px!important
    }

    .plyr [hidden] {
        display: none!important
    }
`;

export default PlyrGlobalStyle;
