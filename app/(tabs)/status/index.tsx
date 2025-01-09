import { View, Text, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import MaskInput from "react-native-mask-input";
import UserStore from "@/app/store/UserStore";
import { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Page = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark : Colors.light;
  const user = UserStore((state) => state.getUser());
  const date = new Date(user.createdAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <View style={{
      flex: 1,
      // position: 'relative',

      backgroundColor: color.background,
      paddingTop: Dimensions.get('window').height * 0.2,
      paddingRight: 10,
      paddingLeft: 10,
      width: '100%',
    }}>
      <SafeAreaView style={{}}>
        <View style={{
          height: Dimensions.get('window').height * 0.6,
          position: 'relative',
          backgroundColor: color.secondaryBackground,
          paddingTop: 60,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 18,
        }}>

          <View style={{ position: 'absolute', top: -120, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons style={{}} name="person" size={190} color={color.primary} />
          </View>
          <Text style={{ color: color.primary, textAlign: 'center', fontSize: 25, marginBottom: 5 }}>{user.name}</Text>
          <Text style={{ color: color.primary, textAlign: 'center', fontSize: 18, marginBottom: 5 }}>{user.nickname ? user.nickname : 'no nickname'}</Text>
          <Text style={{ color: color.primary, textAlign: 'left', fontSize: 18, marginBottom: 5, marginTop: 20 }}>My biography</Text>
          <Text style={{ color: color.text, textAlign: 'left', fontSize: 18, marginBottom: 5, marginTop: 20 }}>{user.bio}</Text>
          <View style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            justifyContent: 'space-between',
          }}>
            <View style={{

              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
              <Text style={{ color: color.primary, textAlign: 'center', fontSize: 18, marginBottom: 10 }}>My birthdate:</Text>
              <Text style={{ color: color.text, textAlign: 'center', fontSize: 18, marginBottom: 10 }}>{user.birthdate ? user.birthdate : '?'}</Text>
            </View>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={{ color: color.primary, textAlign: 'center', fontSize: 18, marginBottom: 10 }}>Created at:</Text>
              <Text style={{ color: color.text, textAlign: 'center', fontSize: 18, marginBottom: 10 }}>{`${year}-${month}-${day}`}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Page;
