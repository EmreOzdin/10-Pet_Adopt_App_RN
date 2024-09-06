import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";

export default function Category() {
  const [categorylist, setCategoryList] = useState([]);

  useEffect(() => {
    GetCategories();
  }, []);
  /*Used to Get Category List from DB */
  const GetCategories = async () => {
    setCategoryList([]);
    const snapshot = await getDocs(collection(db, "Category"));
    snapshot.forEach((doc) => {
      setCategoryList((categorylist) => [...categorylist, doc.data()]);
    });
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
        Category
      </Text>
      <FlatList
        data={categorylist}
        renderItem={({ item, index }) => (
          <View>
            <View>
              <Image
                source={{ uri: item?.imageUrl }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
