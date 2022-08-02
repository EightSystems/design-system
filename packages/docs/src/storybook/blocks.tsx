import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    story: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "white",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        borderRadius: 4,
        ...Platform.select({
            android: {
                elevation: 1,
            },
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.0,
            },
        }),
    },
});

export const Meta = props => {
    const navigation = useNavigation();
    useEffect(() => {
        if (props.title) {
            navigation.setOptions({
                title: props.title,
            });
        }
    }, [props.title]);

    return null;
};

export const Story = ({ name, args, children }) => {
    return <View style={styles.story}>{React.isValidElement(children) ? children : children(args)}</View>;
};

export const Canvas = ({ children }) => {
    return <View>{children}</View>;
};

export const Description = props => {
    return null;
};

export const ArgsTable = props => {
    return (
        <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text>ArgTable goes here</Text>
        </View>
    );
};
