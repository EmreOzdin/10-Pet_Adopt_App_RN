import { View, Text } from "react-native";
import React from "react";
import { auth } from "../../configs/FirebaseConfig";

export default function Header() {
  const user = auth.currentUser;

  return (
    <View>
      <View>
        <Text>Welcome, </Text>
        <Text>{user?.metadata}</Text>
      </View>
    </View>
  );
}
