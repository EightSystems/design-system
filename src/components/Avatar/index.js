import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

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

    /** Usado em combinação com `src` para prover um atributo `alt` para o elemento `img`, caso haja uma imagem. */
    alt: Proptypes.string,

    /** O atributo `src` do elemento `img` */
    src: Proptypes.string,

    /** Define o tamanho do componente. */
    size: Proptypes.oneOf(["large", "medium", "small"]).isRequired,

    /** Sobrepõe ou extende as classes de estilo existentes. */
    className: Proptypes.string,
};

export default Avatar;
