export type WebDividerProps = {
    height?: Number;

    className?: string;
    style?: any;
};

export type NativeDividerProps = Omit<WebDividerProps, "className">;
