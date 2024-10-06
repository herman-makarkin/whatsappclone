import React from "react";
import { router, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import { ActivityIndicator } from "react-native";
const RUS_PHONE = [
  "+",
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];

const otp = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOTP = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/verify/${phoneNumber}`);
    }, 2000);
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        {loading && (
          <View style={[StyleSheet.absoluteFill, styles.loading]}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={{ marginTop: 10, fontSize: 16 }}>Loading...</Text>
          </View>
        )}
        <Text style={styles.description}>
          Whatsapp will need to verify your account. Carrier charges may apply
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text>Russia</Text>
            <Ionicons name="chevron-forward" size={23} color={Colors.gray} />
          </View>
          <View style={styles.separator} />
          <MaskInput
            value={phoneNumber}
            keyboardType="numeric"
            autoFocus
            placeholder="+7 your phone number"
            onChangeText={(masked, unmasked) => {
              setPhoneNumber(unmasked);
              console.log(unmasked);
              console.log(masked);
            }}
            mask={RUS_PHONE}
          ></MaskInput>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          style={[styles.button, phoneNumber !== "" ? styles.enabled : null]}
          disabled={phoneNumber === ""}
          onPress={sendOTP}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  description: {
    color: Colors.gray,
    marginBottom: 20,
  },
  list: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginBottom: 15,
  },
  separator: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.gray,
    opacity: 0.3,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.lightGray,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  buttonText: {
    color: Colors.gray,
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default otp;
