import * as React from "react";

export type WebBoxProps = React.ComponentPropsWithRef<"div"> & {
    children: React.ReactNode;
};

const Box = ({ children }: WebBoxProps) => {
    return <Box>{children}</Box>;
};

export default Box;
