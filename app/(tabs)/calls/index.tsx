import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useState } from "react";
import Colors from "@/constants/Colors";
import calls from "@/assets/data/calls.json";
import { defaultStyles } from "@/constants/Styles";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import { useColorScheme } from "react-native";

const Page = () => {
  const [isEditing, setEditing] = useState(false);
  const [items, setItems] = useState(calls);

  const onEdit = () => {};

  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.background,
      }}
    >
      <Stack.Screen
      /*
        options={
          {
          headerLeft: () => (
            <TouchableOpacity onPress={onEdit}>
              <Text style={{ color: Colors.primary }}>
                {isEditing ? "Done" : "Edit"}
              </Text>
            </TouchableOpacity>
          ),
          }
        }
          */
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View
          style={[
            defaultStyles.block,
            {
              backgroundColor: color.tabs,
            },
          ]}
        >
          <FlatList
            data={items}
            scrollEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            //ItemSeparatorComponent={() => (
            //<View style={defaultStyles.separator} />
            //)}
            renderItem={({ item }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingVertical: 10,
                  paddingLeft: 10,
                  marginTop: 10,

                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  backgroundColor: color.tabs,
                }}
              >
                <Image source={{ uri: item.img }} style={styles.avatar} />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: item.missed ? Colors.red : color.text,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Ionicons
                      name={item.video ? "videocam" : "call"}
                      size={20}
                      color={color.secondary}
                    />
                    <Text
                      style={{ color: color.secondary, flex: 1, fontSize: 14 }}
                    >
                      {item.incoming ? "Incoming" : "Outgoing"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    width: 100,
                  }}
                >
                  <Text style={{ color: Colors.gray }}>
                    {format(item.date, "MM.dd.yy")}
                  </Text>
                  <Ionicons
                    name="information-circle-outline"
                    size={24}
                    color={Colors.primary}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
});

export default Page;
