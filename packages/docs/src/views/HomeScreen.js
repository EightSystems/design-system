import React from "react";
import themeColors from "../../../core/src/theme/colors";
import { nativeTypography } from "../../../core/src/theme/typography";
import styled from "styled-components";
import { FlatList } from "react-native";
import StoryList from "../../StoryImports";

const ItemLabel = styled.Text`
    color: ${themeColors.lightContrast};
    font-family: ${nativeTypography.fontFaces.primaryBold};
    font-size: 16px;
`;
const ItemView = styled.Pressable`
    padding: 20px 10px;
    border-color: ${themeColors.dark};
    border-bottom-width: 3px;
    background: ${themeColors.light};
`;

const Item = ({ title, navigation, isOdd }) => (
    <ItemView onPress={() => navigation.navigate("Details", { indexName: title })} isOdd={isOdd}>
        <ItemLabel isOdd={isOdd}>{title}</ItemLabel>
    </ItemView>
);

const HomeScreen = ({ navigation }) => {
    const StoryKeys = Object.keys(StoryList);

    const renderItem = ({ item, index }) => <Item title={item} navigation={navigation} isOdd={index % 2 === 0} />;

    return <FlatList data={StoryKeys} renderItem={renderItem} keyExtractor={item => item} />;
};

export default HomeScreen;
