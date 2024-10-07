import React, { useState, useCallback, useEffect } from "react";
import Colors from "@/constants/Colors";
import { GiftedChat, IMessage, SystemMessage } from "react-native-gifted-chat";
import messageData from "@/assets/data/messages.json";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import pattern from "@/assets/images/pattern.png";

const Page = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");

  const [replyMessage, setReplyMessage] = useState<IMessage | null>(null);
  //const swipeableRowRef = useRef<Swipeable | null>(null);

  useEffect(() => {
    setMessages([
      ...messageData.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from ? "You" : "Bob",
          },
        };
      }),
      {
        _id: 0,
        system: true,
        text: "All your base are belong to us",
        createdAt: new Date(),
        user: {
          _id: 0,
          name: "Bot",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any[]) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <ImageBackground
      source={pattern}
      style={{
        flex: 1,
        //marginBottom: insets.bottom,
        backgroundColor: Colors.background,
      }}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderAvatar={null}
        renderSystemMessage={(props) => <SystemMessage {...props} />}
      />
    </ImageBackground>
  );
};

export default Page;
