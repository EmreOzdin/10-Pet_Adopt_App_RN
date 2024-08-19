import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import Colors from "../../../constants/Colors";

export default function SignIn() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View>
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.WHITE,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            marginTop: 60,
          }}
        >
          Let's Sign You In
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            marginTop: 60,
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            marginTop: 60,
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          You've been Missed!
        </Text>
      </View>
    </View>
  );
}
