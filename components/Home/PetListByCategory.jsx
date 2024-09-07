import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import PetListItem from "./PetListItem";

export default function PetListByCategory() {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    GetPetList("Dogs");
  }, []);

  const GetPetList = async (category) => {
    setPetList([]);
    const q = query(collection(db, "Pets"), where("category", "==", category));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setPetList((petList) => [...petList, doc.data()]);
    });
  };
  return (
    <View>
      <Category category={(value) => GetPetList(value)} />
      {/* List of Pets */}
      <FlatList
        data={petList}
        renderItem={({ item, index }) => <PetListItem pet={item} />}
      />
    </View>
  );
}
