import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import PetListItem from "./PetListItem";
import Colors from "../../constants/Colors";

export default function PetListByCategory() {
  const [petList, setPetList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GetPetList("Dogs");
  }, []);

  const GetPetList = async (category) => {
    setLoader(true);
    setPetList([]);
    const q = query(collection(db, "Pets"), where("category", "==", category));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setPetList((petList) => [...petList, doc.data()]);
    });
    setLoader(false);
  };
  return (
    <View>
      <Category category={(value) => GetPetList(value)} />
      {/* List of Pets */}
      <FlatList
        data={petList}
        style={{ margint: 10 }}
        horizontal={true}
        refreshing={loader}
        onRefresh={() => GetPetList("Dogs")}
        renderItem={({ item, index }) => <PetListItem pet={item} />}
      />
    </View>
  );
}
