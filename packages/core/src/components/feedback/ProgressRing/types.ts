export type ProgressRingProps = {
    /** Define o tamanho do raio do anel. */
    radius: number;

    /** Define a largura do traçado do anel. */
    stroke: number;

    /** Define a cor do traçado do anel. */
    strokeColor: string;

    /** Caso especificada, define a string de texto que deve estar dentro do anél de progresso. */
    text?: string;

    /** Caso especificada, define a cor do texto dentro do anél de progresso. */
    textColor?: string;

    /** Caso seja especificado, define o tamanho da fonte do texto dentro do anel de progresso (em px). */
    textFontSize?: number;

    textXAxis?: number;

    textYAxis?: number;

    /** Define o número do progresso em uma escala de 0 a 100. */
    progress: number;
};
