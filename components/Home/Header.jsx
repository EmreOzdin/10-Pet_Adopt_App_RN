import { View, Text, Image } from "react-native";
import React from "react";
import { auth } from "../../configs/FirebaseConfig";

export default function Header() {
  const user = auth.currentUser;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
          Welcome,
        </Text>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 25 }}>
          {user?.displayName}
        </Text>
      </View>
      <Image
        source={{ uri: user?.photoURL }}
        style={{ width: 40, height: 40, borderRadius: 99 }}
      />
    </View>
  );
}
