import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useColorScheme } from "react-native";

const Layout = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerStyle: {
            backgroundColor: color.tabs,
          },
          headerSearchBarOptions: {
            placeholder: "Search",
          },
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: color.tabs,
          },
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                width: 220,
                alignItems: "center",
                gap: 10,
                paddingBottom: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: color.tabs,
                }}
              >
                <Image
                  source={{
                    uri: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: color.text,
                }}
              >
                Random dude
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="videocam-outline"
                  color={color.primary}
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="call-outline" color={color.primary} size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => window.alert("settings")}>
                <Ionicons
                  name="ellipsis-vertical-outline"
                  color={color.primary}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          ),
          // headerStyle: {
          //   backgroundColor: Colors.background,
          // },
        }}
      />
    </Stack>
  );
};
export default Layout;
