import React from "react";
import { router, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import { ActivityIndicator } from "react-native";
import { useColorScheme } from "react-native";
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

  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 20,
          backgroundColor: color.background,
        }}
      >
        {loading && (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                ...StyleSheet.absoluteFillObject,
                zIndex: 10,
                backgroundColor: color.background,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={{ marginTop: 10, fontSize: 16, color: color.text }}>
              Loading...
            </Text>
          </View>
        )}
        <Text
          style={{
            color: color.text,
            marginBottom: 20,
          }}
        >
          Whatsapp will need to verify your account. Carrier charges may apply
        </Text>
        <View
          style={{
            width: "100%",
            backgroundColor: color.tabs,
            borderRadius: 8,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 6,
              marginBottom: 15,
            }}
          >
            <Text style={{ color: color.text }}>Russia</Text>
            <Ionicons name="chevron-forward" size={23} color={Colors.gray} />
          </View>
          <View
            style={{
              width: "100%",
              height: StyleSheet.hairlineWidth,
              backgroundColor: color.secondary,
              opacity: 0.3,
            }}
          />
          <MaskInput
            value={phoneNumber}
            keyboardType="numeric"
            autoFocus
            placeholder="+7 your phone number"
            placeholderTextColor={color.secondary}
            style={{
              marginTop: 10,
              fontSize: 18,
              // paddingHorizontal: 10,
              color: color.text,
            }}
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
          style={[
            phoneNumber !== ""
              ? {
                  backgroundColor: color.primary,
                }
              : {
                  backgroundColor: color.secondary,
                },
            {
              width: "100%",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            },
          ]}
          disabled={phoneNumber === ""}
          onPress={sendOTP}
        >
          <Text
            style={[
              phoneNumber !== ""
                ? {
                    color: color.text,
                  }
                : {
                    color: color.text,
                  },
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default otp;
