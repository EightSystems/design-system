import React from "react";
import Theme from "../../../base/src/styles/theme";
import styled from "styled-components";
import { FlatList } from "react-native";
import StoryList from "../../StoryImports";

const ItemLabel = styled.Text`
  color: ${Theme.colors.primaryTint};
  font-size: 16px;
`;
const ItemView = styled.Pressable`
  padding: 10px;
  background: ${Theme.colors.background};
`;

const Item = ({ title, navigation }) => (
  <ItemView
    onPress={() => navigation.navigate("Details", { indexName: title })}
  >
    <ItemLabel>{title}</ItemLabel>
  </ItemView>
);

const HomeScreen = ({ navigation }) => {
  const StoryKeys = Object.keys(StoryList);

  const renderItem = ({ item }) => (
    <Item title={item} navigation={navigation} />
  );

  return (
    <FlatList
      data={StoryKeys}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

export default HomeScreen;
