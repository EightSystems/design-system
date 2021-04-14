import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as V from "../../styles/variables";

const AvatarWrapper = styled.div`
    font-family: ${V.FontFaces.Poppins};
    font-weight: 700;
    line-height: 1;
    user-select: none;

    position: relative;
    overflow: hidden;
    background: var(--grayShade);
    color: var(--background);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &[data-size="large"] {
        width: 156px;
        height: 156px;
        font-size: 48px;
    }
    &[data-size="medium"] {
        width: 100px;
        height: 100px;
        font-size: 36px;
    }
    &[data-size="small"] {
        width: 56px;
        height: 56px;
        font-size: 24px;
    }

    & .avatar__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Avatar = ({ children, alt, src, size, className }) => {
    return (
        <AvatarWrapper className={className} data-size={size}>
            {src ? <img className="avatar__image" alt={alt} src={src} /> : null}
            {children ? children : null}
        </AvatarWrapper>
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
