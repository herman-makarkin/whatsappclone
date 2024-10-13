import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import { router } from "expo-router";
import { useColorScheme } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();
  const [code, setCode] = useState("");

  const verifyCode = async () => {
    router.push("/(tabs)/chats");
  };
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const verifySignIn = async () => {};
  const resendCode = async () => {};

  useEffect(() => {
    if (code.length === 6) {
      if (signin === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: color.background,
      }}
    >
      <Stack.Screen options={{ headerTitle: phone }} />

      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          color: color.text,
        }}
      >
        We have sent you an Sms with a code to the number above
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontSize: 14,
          textAlign: "center",
          color: color.text,
        }}
      >
        To complete your phone number verification, please enter the 6-digit
        actiovation code.
      </Text>

      <SafeAreaView style={styles.root}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: "sms-otp",
            default: "one-time-code",
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                {
                  width: 40,
                  height: 40,
                  lineHeight: 38,
                  fontSize: 24,
                  borderBottomWidth: 2,
                  borderBottomColor: color.secondary,
                  color: color.text,
                  textAlign: "center",
                },
                isFocused && {
                  borderBottomColor: color.primary,
                },

                //styles.focusCell,
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </SafeAreaView>

      <TouchableOpacity style={styles.button} onPress={resendCode}>
        <Text
          style={{
            marginTop: 70,
            fontSize: 20,
            fontWeight: "bold",
            color: color.primary,
            textAlign: "center",
          }}
        >
          Didn't receive a code?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    width: "100%",
    alignContent: "center",
  },
  buttonText: {},
  root: { flex: 1, padding: 20 },
  codeFieldRoot: { marginTop: 20, gap: 8 },
});

export default Page;
