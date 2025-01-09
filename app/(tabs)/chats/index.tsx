import React from "react";
import { View, Text } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import chats from "@/assets/data/chats.json";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";

const Page = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingTop: 80,
        paddingBottom: 40,
        backgroundColor: color.background,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={chats}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={() => (
          //   <View style={[defaultStyles.separator]} />
          // )}
          renderItem={({ item }) => (
            <ChatRow {...item} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Page;
