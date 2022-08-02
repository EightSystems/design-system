import React from "react";
import { IconProps } from "../../primitives/Icon";
import { TextProps } from "../../typography/Text";
import { BoxProps } from "../Box/types";

export type ListItemProps = {
    title?: string;
    titleColor?: TextProps["textColor"];

    text?: string;
    textColor?: TextProps["textColor"];

    subTitle?: string;
    subTitleColor?: TextProps["textColor"];

    fontFace?: TextProps["fontFace"];

    onPress: () => void;

    backgroundColor?: BoxProps["backgroundColor"];
    borderColor?: BoxProps["borderColor"];

    icon?: string | React.ReactNode;
    iconFamilyName?: IconProps["familyName"];

    rightIcon?: string | React.ReactNode;
    rightIconFamilyName?: IconProps["familyName"];
};

type RenderItemData = {
    item: any;
    index: number;
};

export type ListProps = {
    keyExtractor?: (item: any) => string;
    data: any[];
    renderItem: (data: RenderItemData) => React.ReactElement;
    extraData?: any;

    style?: any;
    className?: string;
};
