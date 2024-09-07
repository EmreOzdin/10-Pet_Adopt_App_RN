import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function PetListItem({ pet }) {
  return (
    <View
      style={{
        padding: 5,
        marginRight: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        width: 170,
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: pet?.imageUrl }}
        style={{
          width: 150,
          height: 135,
          objectFit: "fill",
          borderRadius: 10,
        }}
      />
      <Text style={{ fontFamily: "outfit-medium", fontSize: 18 }}>
        {pet?.name}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: Colors.GRAY, fontFamily: "outfit-regular" }}>
          {pet?.breed}
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit-regular",
            paddingHorizontal: 7,
            borderRadius: 10,
            fontSize: 11,
            backgroundColor: Colors.LIGHT_PRIMARY,
          }}
        >
          {pet?.age} years old
        </Text>
      </View>
    </View>
  );
}
