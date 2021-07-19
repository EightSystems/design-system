import React from "react";
import Theme from "../../../base/src/styles/theme";
import styled from "styled-components/native";
import { View, ScrollView } from "react-native";
import StoryList from "../../StoryImports";

const DetailsScreen = ({ route }) => {
  const { indexName } = route.params;
  const MdxComponent = StoryList[indexName];
  return (
    <ScrollView>
      <View style={{ margin: 16 }}>
        <MdxComponent />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
