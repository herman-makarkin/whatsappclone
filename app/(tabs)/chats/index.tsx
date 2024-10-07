import React from "react";
import { View, Text } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import chats from "@/assets/data/chats.json";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";

const Page = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 40, paddingTop: 50, width: 370 }}
    >
      <FlatList
        data={chats}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[defaultStyles.separator]} />
        )}
        renderItem={({ item }) => <ChatRow {...item} />}
      />
    </ScrollView>
  );
};

export default Page;
