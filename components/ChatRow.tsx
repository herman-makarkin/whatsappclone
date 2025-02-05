import { View, Text } from "react-native";
import { format } from "date-fns";
import Colors from "@/constants/Colors";
import { Image } from "react-native";
import React from "react";
import { FC } from "react";
import { Link } from "expo-router";
import { TouchableHighlight } from "react-native";
import SwipeableRow from "./SwipeableRow";
import { useColorScheme } from "react-native";

export interface ChatRowProps {
  id: string;
  from: string;
  date: string;
  img: string;
  msg: string;
  read: boolean;
  unreadCount: number;
}

const ChatRow: FC<ChatRowProps> = ({
  id,
  from,
  date,
  img,
  msg,
  read,
  unreadCount,
}) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    // <SwipeableRow>
    <Link href={`/(tabs)/chats/${id}`} asChild>
      <TouchableHighlight activeOpacity={0.8} underlayColor={color.secondary}>
        <View
          style={{
            //marginLeft: "auto",
            //marginRight: "auto",
            width: "100%",
            padding: 10,
            paddingTop: 12,
            // paddingRight: 20,
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            paddingVertical: 5,
            backgroundColor: color.tabs,
          }}
        >
          <Image
            source={{ uri: img }}
            style={{ width: 60, height: 60, borderRadius: 50 }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: color.text }}
            >
              {from}
            </Text>
            <Text style={{ fontSize: 16, color: color.secondary }}>
              {msg.length > 40 ? `${msg.substring(0, 40)}` : msg}
            </Text>
          </View>
          <Text style={{ color: color.secondary, alignSelf: "flex-start" }}>
            {format(date, "MM.dd.yy")}
          </Text>
        </View>
      </TouchableHighlight>
    </Link>
    // /* </SwipeableRow> */
  );
};

export default ChatRow;
