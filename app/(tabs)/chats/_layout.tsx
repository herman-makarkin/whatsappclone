import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerStyle: { backgroundColor: Colors.background },
          headerSearchBarOptions: { placeholder: "Search" },
          headerStyle: { backgroundColor: "#fff" },
        }}
      />
    </Stack>
  );
}

export default Layout;

/*
          headerRight: () => (
            {
            <TouchableOpacity>
              <Ionicons name="call-outline" color={Colors.primary} size={30} />
            </TouchableOpacity>
} ),
            */
