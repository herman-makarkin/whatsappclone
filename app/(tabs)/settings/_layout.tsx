import React from "react";
import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

function Layout() {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: color.tabs },
          headerSearchBarOptions: { placeholder: "Search" },
        }}
      />
    </Stack>
  );
}

export default Layout;
