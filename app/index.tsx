import { StyleSheet, Image, View, Text } from "react-native";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import welcomeImage from "@/assets/images/welcome.png";
import { TouchableOpacity } from "react-native";
const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: welcome_image }} style={styles.welcome}></Image>
      <Text style={styles.headline}>Welcome to my whatsapp clone</Text>
      <Text style={styles.description}>
        Before you mindlessly press that juicy button down there it would be
        great if you read{" "}
        <Text style={styles.link}>the license of this project</Text> just in
        case
      </Text>
      <Link href={"/otp"} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,
  },
  headline: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignContent: "center",
  },
  buttonText: {
    marginTop: 70,
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
});

export default Page;
