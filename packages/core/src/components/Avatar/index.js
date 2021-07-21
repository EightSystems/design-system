import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {string} alt
 * @property {string} src
 * @property {string} size
 * @property {string} className
 */
const Avatar = props => {
    return (
        <S.AvatarWrapper {...props} className={props.className} data-size={props.size}>
            {props.src ? <img className="avatar__image" alt={props.alt} src={props.src} /> : null}
            {props.children ? props.children : null}
        </S.AvatarWrapper>
    );
};

Avatar.propTypes = {
    /** Usado para renderizar ícones ou elementos de texto dentro do Avatar se `src` não estiver definido. Pode ser um elemento ou apenas uma string. */
    children: Proptypes.node,

    /** Used in combination with `src` to provide the attribute `alt` if `src` is specified. */
    alt: Proptypes.string,

    /** The `src` attribute of the `img` element. */
    src: Proptypes.string,

    /** Defines the component size. */
    size: Proptypes.oneOf(["large", "medium", "small"]).isRequired,

    /** Overrides or extends the existing style definitions with a custom class. */
    className: Proptypes.string,
};

export default Avatar;
