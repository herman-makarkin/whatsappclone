import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";

const Page = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.background,
      }}
    >
      <Text>Page 1</Text>
    </View>
  );
};

export default Page;
