import * as React from "react";

export type WebBoxProps = React.ComponentPropsWithRef<"div"> & {
    children: React.ReactNode;
};

const Box = ({ children, ...otherProps }: WebBoxProps) => {
    return <div {...otherProps}>{children}</div>;
};

export default Box;
