import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useColorScheme } from "react-native";

function Layout() {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Communities",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: color.tabs },
          headerSearchBarOptions: { placeholder: "Search" },
          /*
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="call-outline" color={Colors.primary} size={30} />
            </TouchableOpacity>
          ),
          */
        }}
      />
    </Stack>
  );
}

export default Layout;
