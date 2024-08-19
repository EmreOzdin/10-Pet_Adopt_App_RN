import { View, Text, TextInput, StyleSheet } from "react-native";
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
          paddingTop: 50,
          backgroundColor: Colors.WHITE,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
          }}
        >
          Let's Sign You In
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 10,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 30,
            color: Colors.GRAY,
          }}
        >
          You've been Missed!
        </Text>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text style={{ fontFamily: "outfit-regular" }}></Text>
        </View>

        {/*Email*/}
        <View>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="Enter Email" />
        </View>

        {/*Password*/}
        <View style={{ marginTop: 20 }}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Enter Password"
          />
        </View>

        {/* SignIn Account Button */}
        <View
          style={{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 50,
          }}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Sign In
          </Text>
        </View>

        {/* Create Button */}
        <View
          style={{
            padding: 20,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 1,
          }}
        >
          <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
            Create Account
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit-regular",
  },
});
