import React from "react";
import { mdx as reactMDX } from "@mdx-js/react";
import { Text, TouchableOpacity, View } from "react-native";
import FitImage from "react-native-fit-image";
import openUrl from "./openUrl";
import { styles } from "./styles";

const components = {
    div: ({ children }) => <View style={styles.div}>{children}</View>,
    wrapper: ({ children }) => <View style={styles.div}>{children}</View>,
    textgroup: ({ children }) => {
        return <Text style={styles.text}>{children}</Text>;
    },
    inline: ({ children }) => {
        return <Text>{children}</Text>;
    },
    text: ({ children }) => {
        return <Text>{children}</Text>;
    },
    span: ({ children }) => {
        return <Text>{children}</Text>;
    },
    strong: ({ children }) => {
        return <Text style={styles.strong}>{children}</Text>;
    },
    a: ({ href, children }) => {
        return (
            <TouchableOpacity onPress={() => openUrl(href)}>
                <Text style={styles.link}>{children}</Text>
            </TouchableOpacity>
        );
    },
    em: ({ children }) => {
        return <Text style={styles.em}>{children}</Text>;
    },
    h1: ({ children }) => {
        return (
            <View style={styles.headingContainer}>
                <Text style={[styles.heading, styles.heading1]}>{children}</Text>
            </View>
        );
    },
    h2: ({ children }) => {
        return (
            <View style={styles.headingContainer}>
                <Text style={[styles.heading, styles.heading2]}>{children}</Text>
            </View>
        );
    },
    h3: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading3]}>{children}</Text>
        </View>
    ),
    h4: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading4]}>{children}</Text>
        </View>
    ),
    h5: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading5]}>{children}</Text>
        </View>
    ),
    h6: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading6]}>{children}</Text>
        </View>
    ),
    p: ({ children }) => <Text style={styles.paragraph}>{children}</Text>,
    blockquote: ({ children }) => <View style={styles.blockquote}>{children}</View>,
    inlineCode: ({ children }) => {
        return <Text style={styles.codeInline}>{children}</Text>;
    },
    code: ({ children }) => {
        return <Text style={styles.codeBlock}>{children}</Text>;
    },
    pre: ({ children }) => <View style={styles.pre}>{children}</View>,
    ul: ({ children }) => {
        return <View style={[styles.list, styles.listUnordered]}>{children}</View>;
    },
    ol: ({ children }) => {
        return <View style={[styles.list, styles.listOrdered]}>{children}</View>;
    },
    li: ({ children }) => {
        return (
            <View style={styles.listUnorderedItem}>
                <Text style={styles.listUnorderedItemIcon}>{"\u00B7"}</Text>
                <View style={[styles.listItem]}>{children}</View>
            </View>
        );
    },
    table: ({ children }) => <View style={[styles.table]}>{children}</View>,
    thead: ({ children }) => <View style={[styles.tableHeader]}>{children}</View>,
    tbody: ({ children }) => <View>{children}</View>,
    th: ({ children }) => {
        return <View style={[styles.tableHeaderCell]}>{children}</View>;
    },
    tr: ({ children }) => {
        return <View style={[styles.tableRow]}>{children}</View>;
    },
    td: ({ children }) => {
        return <View style={[styles.tableRowCell]}>{children}</View>;
    },
    hr: ({ children }) => {
        return <View style={[styles.hr]} />;
    },
    br: ({ children }) => <Text>{"\\n"}</Text>,
    img: ({ src, children }) => {
        return <FitImage indicator={true} style={styles.image} source={{ uri: src }} />;
    },
};

const mdx = (element, props, ...children) => {
    if (element) {
        return reactMDX(components[element] ? components[element] : element, props, ...children);
    } else {
        return <Text>{"ELEMENT IS UNDEFINED"}</Text>;
    }
};

export default mdx;
