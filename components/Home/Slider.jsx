import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";

export default function Slider() {
  // Get data from Firestore
  useEffect(() => {
    GetSlider();
  }, []);

  const GetSlider = async () => {
    const snapshot = await getDocs(collection(db, "sliders"));
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };
  return (
    <View>
      <Text>Slider</Text>
    </View>
  );
}
