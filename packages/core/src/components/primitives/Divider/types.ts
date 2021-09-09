export type DividerProps = {
    height?: Number;

    className?: string;
    style?: any;
};

export type NativeDividerProps = Omit<DividerProps, "className">;
