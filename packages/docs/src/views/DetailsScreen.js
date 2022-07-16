import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import StoryList from "../../StoryImports";

const DetailsScreen = ({ route }) => {
    const { indexName } = route.params;
    const MdxComponent = StoryList[indexName];

    return (
        <KeyboardAwareScrollView style={{ paddingLeft: 16, paddingRight: 16, width: "100%" }}>
            <MdxComponent />
        </KeyboardAwareScrollView>
    );
};

export default DetailsScreen;
