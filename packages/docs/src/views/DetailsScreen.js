import React from "react";
import { View, ScrollView } from "react-native";
import StoryList from "../../StoryImports";

const DetailsScreen = ({ route }) => {
    const { indexName } = route.params;
    const MdxComponent = StoryList[indexName];
    return (
        <ScrollView>
            <View style={{ padding: 16, width: "100%", flex: 1 }}>
                <MdxComponent />
            </View>
        </ScrollView>
    );
};

export default DetailsScreen;
