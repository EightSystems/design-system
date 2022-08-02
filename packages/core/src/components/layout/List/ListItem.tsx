import React from "react";
import { Icon } from "../../primitives/Icon";
import { Text } from "../../typography/Text";
import { ListItemContainer, ListItemIconContainer, ListItemTextContainer, ListItemRightIconContainer } from "./styled";
import { ListItemProps } from "./types";

export const ListItem = ({
    title,
    titleColor = "primary",

    subTitle,
    subTitleColor = "secondary",

    text,
    textColor = "secondary",

    icon,
    iconFamilyName = "FontAwesome",

    rightIcon,
    rightIconFamilyName = "FontAwesome",

    backgroundColor = "background",
    borderColor = "light",
    fontFace = "secondary",
    onPress,
}: ListItemProps) => {
    return (
        <ListItemContainer
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            borderRadius={"none"}
            borderPosition={"bottom"}
            onPress={onPress}
            size={"small"}
            iconPadding={10}
            startIcon={
                icon ? (
                    typeof icon === "string" ? (
                        <Icon
                            familyName={iconFamilyName}
                            icon={icon}
                            size="lg"
                            color="primary"
                            style={{ alignSelf: "center" }}
                        />
                    ) : (
                        icon
                    )
                ) : null
            }
            endIcon={
                icon ? (
                    typeof rightIcon === "string" ? (
                        <Icon
                            familyName={rightIconFamilyName}
                            icon={rightIcon}
                            size="xxs"
                            color="primary"
                            style={{ alignSelf: "center" }}
                        />
                    ) : (
                        rightIcon
                    )
                ) : null
            }
        >
            <ListItemTextContainer>
                {title && (
                    <Text fontFace={fontFace} fontWeight="semibold" textColor={titleColor} fontSize="sm">
                        {title}
                    </Text>
                )}

                {subTitle && (
                    <Text
                        fontFace={fontFace}
                        fontWeight="semibold"
                        textColor={subTitleColor}
                        textAlign="justify"
                        fontSize="xs"
                    >
                        {subTitle}
                    </Text>
                )}

                {text && (
                    <Text fontFace={fontFace} fontWeight="normal" textColor={textColor} fontSize="xxs">
                        {text}
                    </Text>
                )}
            </ListItemTextContainer>
        </ListItemContainer>
    );
};
