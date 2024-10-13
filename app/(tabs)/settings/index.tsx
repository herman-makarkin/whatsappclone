import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BoxedIcon from "@/components/BoxedIcon";
import { useColorScheme } from "react-native";

const Page = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  const devices = [
    {
      name: "Broadcast Lists",
      icon: "megaphone",
      backgroundColor: Colors.green,
    },
    {
      name: "Starred Messages",
      icon: "star",
      backgroundColor: Colors.yellow,
    },
    {
      name: "Linked Devices",
      icon: "laptop-outline",
      backgroundColor: Colors.green,
    },
  ];

  const items = [
    {
      name: "Account",
      icon: "key",
      backgroundColor: Colors.primary,
    },
    {
      name: "Privacy",
      icon: "lock-closed",
      backgroundColor: "#33A5D1",
    },
    {
      name: "Chats",
      icon: "logo-whatsapp",
      backgroundColor: Colors.green,
    },
    {
      name: "Notifications",
      icon: "notifications",
      backgroundColor: Colors.red,
    },
    {
      name: "Storage and Data",
      icon: "repeat",
      backgroundColor: Colors.green,
    },
  ];

  const support = [
    {
      name: "Help",
      icon: "information",
      backgroundColor: Colors.primary,
    },
    {
      name: "Tell a Friend",
      icon: "heart",
      backgroundColor: Colors.red,
    },
  ];

  const onSignOut = () => {};

  return (
    <View style={{ flex: 1, backgroundColor: color.background }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={defaultStyles.block}>
          <FlatList
            data={devices}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View
                style={[defaultStyles.item, { backgroundColor: color.tabs }]}
              >
                <BoxedIcon
                  name={item.icon}
                  backgroundColor={item.backgroundColor}
                />
                <Text style={{ fontSize: 18, flex: 1, color: color.text }}>
                  {item.name}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.gray}
                />
              </View>
            )}
          />
        </View>
        <View style={defaultStyles.block}>
          <FlatList
            data={items}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View
                style={[defaultStyles.item, { backgroundColor: color.tabs }]}
              >
                <BoxedIcon
                  name={item.icon}
                  backgroundColor={item.backgroundColor}
                />
                <Text style={{ fontSize: 18, flex: 1, color: color.text }}>
                  {item.name}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.gray}
                />
              </View>
            )}
          />
        </View>
        <View style={defaultStyles.block}>
          <FlatList
            data={support}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View
                style={[defaultStyles.item, { backgroundColor: color.tabs }]}
              >
                <BoxedIcon
                  name={item.icon}
                  backgroundColor={item.backgroundColor}
                />
                <Text style={{ fontSize: 18, flex: 1, color: color.text }}>
                  {item.name}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.gray}
                />
              </View>
            )}
          />
        </View>
        <TouchableOpacity onPress={() => onSignOut()}>
          <Text
            style={{
              color: color.primary,
              fontSize: 18,
              textAlign: "center",
              paddingVertical: 15,
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Page;
