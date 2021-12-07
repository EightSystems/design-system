import React from "react";
import { Button } from "../../forms/Button";
import { FlexBox } from "../../layout/FlexBox";
import { Icon } from "../../primitives/Icon";
import { Text } from "../../typography/Text";
import { brandIconMapping } from "./icons";
import { brandNameMapping, SavedCardBadgeProps } from "./types";

export const SavedCardBadge = ({
    onClick,
    cardBrand = "mastercard",
    cardIdentifier,
    cardLastDigits,
}: SavedCardBadgeProps) => {
    const IconComponent = brandIconMapping[cardBrand.toLowerCase()];

    return (
        <Button
            onClick={onClick}
            backgroundColor={"white"}
            borderColor={"gray"}
            borderType={"sm"}
            borderRadius={"sm"}
            startIcon={IconComponent ? <IconComponent alt={brandNameMapping[cardBrand.toLowerCase()]} /> : null}
            endIcon={<Icon familyName={"FontAwesome"} icon={"fa-chevron-right"} color={"secondary"} size={"lg"} />}
        >
            <FlexBox flexDirection={"column"} padding={"xs"}>
                <Text fontSize={"xs"} fontWeight={"bold"}>
                    {brandNameMapping[cardBrand.toLowerCase()]} {cardLastDigits ? `terminado em ${cardLastDigits}` : ""}
                </Text>

                {cardIdentifier ? (
                    <Text fontSize={"xs"} fontWeight={"normal"}>
                        {cardIdentifier}
                    </Text>
                ) : null}
            </FlexBox>
        </Button>
    );
};

export default SavedCardBadge;
