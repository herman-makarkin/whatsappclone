import { StyleSheet, Image, View, Text } from "react-native";
import { Link } from "expo-router";
import welcomeImage from "@/assets/images/welcome.png";
import { TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";

const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.background,
      }}
    >
      <Image
        source={{ uri: welcome_image }}
        style={[
          {
            width: "100%",
            height: 300,
            marginBottom: 80,
            backgroundColor: color.background,
          },
        ]}
      ></Image>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
          color: color.text,
        }}
      >
        Welcome to my whatsapp clone
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginBottom: 20,
          textAlign: "center",
          color: color.text,
        }}
      >
        Before you mindlessly press that juicy button down there it would be
        great if you read{" "}
        <Text
          style={{
            color: color.primary,
          }}
        >
          the license of this project
        </Text>{" "}
        just in case
      </Text>
      <Link href={"/otp"} replace asChild>
        <TouchableOpacity
          style={{
            width: "100%",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              marginTop: 70,
              fontSize: 20,
              fontWeight: "bold",
              color: color.primary,
              textAlign: "center",
            }}
          >
            Agree & Continue
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;
