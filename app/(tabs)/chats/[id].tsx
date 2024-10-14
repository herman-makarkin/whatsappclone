import React, { useState, useCallback, useEffect } from "react";
import Colors from "@/constants/Colors";
import {
  Bubble,
  GiftedChat,
  IMessage,
  SystemMessage,
} from "react-native-gifted-chat";
import { Message } from "react-native-gifted-chat";
import messageData from "@/assets/data/messages.json";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import lightPattern from "@/assets/images/pattern.png";
import darkPattern from "@/assets/images/pattern.jpg";
import { useColorScheme } from "react-native";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";
import { InputToolbar } from "react-native-gifted-chat";
import { Send } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import ChatMessageBox from "@/components/ChatMessageBox";
import ReplyMessageBar from "@/components/ReplyMessageBar";

const Page = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");

  const swipeableRowRef = useRef<Swipeable | null>(null);

  const [replyMessage, setReplyMessage] = useState<IMessage | null>(null);
  //const swipeableRowRef = useRef<Swipeable | null>(null);

  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;

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

  const updateRowRef = useCallback(
    (ref: any) => {
      if (
        ref &&
        replyMessage &&
        ref.props.children.props.currentMessage?._id === replyMessage._id
      ) {
        swipeableRowRef.current = ref;
      }
    },
    [replyMessage]
  );

  useEffect(() => {
    if (replyMessage && swipeableRowRef.current) {
      swipeableRowRef.current.close();
      swipeableRowRef.current = null;
    }
  }, [replyMessage]);

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages((previousMessages: any[]) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <ImageBackground
      source={colorScheme === "dark" ? darkPattern : lightPattern}
      style={{
        flex: 1,
        //marginBottom: insets.bottom,
        backgroundColor: color.background,
      }}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        onInputTextChanged={setText}
        user={{
          _id: 1,
        }}
        renderAvatar={null}
        renderSystemMessage={(props) => <SystemMessage {...props} />}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              textStyle={{
                left: {
                  color: color.text,
                },
                right: {
                  color: color.text,
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: color.tabs,
                },
                right: {
                  backgroundColor: color.primary,
                },
              }}
            />
          );
        }}
        textInputProps={{ color: color.text }}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: color.tabs,
            }}
          ></InputToolbar>
        )}
        renderSend={(props) => {
          return (
            <View style={{ paddingBottom: 10 }}>
              {text.length > 0 && (
                <Send {...props}>
                  <Ionicons name="send" color={color.primary} size={28} />
                </Send>
              )}
            </View>
          );
        }}
        renderMessage={(props) => (
          <ChatMessageBox
            {...props}
            setReplyOnSwipeOpen={setReplyMessage}
            updateRowRef={updateRowRef}
          />
        )}
        renderChatFooter={() => (
          <ReplyMessageBar
            clearReply={() => setReplyMessage(null)}
            message={replyMessage}
          />
        )}
      />
    </ImageBackground>
  );
};

export default Page;
