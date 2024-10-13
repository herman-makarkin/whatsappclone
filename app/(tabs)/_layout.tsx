import { View, Text } from "react-native";
import { Tabs, useSegments } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";

const Layout = () => {
  const segments = useSegments();
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: color.tabs,
          },
          tabBarActiveTintColor: color.primary,
          tabBarInactiveBackgroundColor: color.tabs,
          tabBarActiveBackgroundColor: color.tabs,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: Colors.background,
              display: segments[2] === "[id]" ? "none" : "flex",
            },
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            headerShown: false,
            title: "Communities",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="phone-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;
