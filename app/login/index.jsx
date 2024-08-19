import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Image
        source={require("../../assets/images/login.png")}
        style={{
          width: "100%",
          height: 300,
        }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 18,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Let's make adopt the pet which you like and make there happy again
        </Text>
        <Pressable
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.PRIMARY,
            width: "100%",
            borderRadius: 14,
          }}
          onPress={() => {
            router.push("auth/sign-in");
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
