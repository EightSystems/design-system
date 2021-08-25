import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {number} radius
 * @property {number} stroke
 * @property {string} strokeColor
 * @property {string} text
 * @property {string} textColor
 * @property {number} textFontSize
 * @property {number} textXAxis
 * @property {number} textYAxis
 * @property {number} progress
 */
const ProgressRing = props => {
    const normalizedRadius = props.radius - props.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashOffset = circumference - (props.progress / 100) * circumference;

    return (
        <S.StyledSvg height={props.radius * 2} width={props.radius * 2}>
            <S.StyledCircle
                stroke={props.strokeColor}
                fill="transparent"
                strokeWidth={props.stroke}
                strokeDasharray={circumference + " " + circumference}
                strokeDashoffset={strokeDashOffset}
                r={normalizedRadius}
                cx={props.radius}
                cy={props.radius}
            />
            {props.text ? (
                <S.StyledText
                    text-anchor="middle"
                    alignment-baseline="central"
                    fill={props.textColor}
                    fontSize={props.textFontSize}
                    x={props.textXAxis}
                    y={props.textYAxis}
                >
                    {props.text}
                </S.StyledText>
            ) : null}
        </S.StyledSvg>
    );
};

ProgressRing.propTypes = {
    /** Define o tamanho do raio do anel. */
    radius: Proptypes.number.isRequired,

    /** Define a largura do traçado do anel. */
    stroke: Proptypes.number.isRequired,

    /** Define a cor do traçado do anel. */
    strokeColor: Proptypes.string.isRequired,

    /** Caso especificada, define a string de texto que deve estar dentro do anél de progresso. */
    text: Proptypes.string,

    /** Caso especificada, define a cor do texto dentro do anél de progresso. */
    textColor: Proptypes.string,

    /** Caso seja especificado, define o tamanho da fonte do texto dentro do anel de progresso (em px). */
    textFontSize: Proptypes.number,

    textXAxis: Proptypes.number,

    textYAxis: Proptypes.number,

    /** Define o número do progresso em uma escala de 0 a 100. */
    progress: Proptypes.number.isRequired,
};

export default ProgressRing;
