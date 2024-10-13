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
        width: 370,
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
            // <View
            //   style={{
            //     display: "flex",
            //     justifyContent: "center",
            //     width: "100%",
            //     // maxWidth: 300,
            //   }}
            // >
            //   <View style={{ maxWidth: 350 }}>
            <ChatRow {...item} />
            // </View>
            // </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Page;
