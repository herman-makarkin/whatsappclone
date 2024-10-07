import { View, Text } from "react-native";
import { format } from "date-fns";
import Colors from "@/constants/Colors";
import { Image } from "react-native";
import React from "react";
import { FC } from "react";
import { Link } from "expo-router";
import { TouchableHighlight } from "react-native";
import SwipeableRow from "./SwipeableRow";

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
  return (
    <SwipeableRow>
      <Link href={`/(tabs)/chats/${id}`} asChild>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor={Colors.lightGray}
        >
          <View
            style={{
              flexDirection: "row",
              height: 100,
              gap: 14,
              width: 350,
              alignItems: "center",
              paddingLeft: 20,
              paddingVertical: 10,
              paddingRight: 20,
            }}
          >
            <Image
              source={{ uri: img }}
              style={{ width: 60, height: 60, borderRadius: 50 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>{from}</Text>
              <Text style={{ fontSize: 16, color: Colors.gray }}>
                {msg.length > 40 ? `${msg.substring(0, 40)}` : msg}
              </Text>
            </View>
            <Text style={{ color: Colors.gray }}>
              {format(date, "MM.dd.yy")}
            </Text>
          </View>
        </TouchableHighlight>
      </Link>
    </SwipeableRow>
  );
};

export default ChatRow;
