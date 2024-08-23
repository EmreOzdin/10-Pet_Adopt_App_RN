import { Text, View } from "react-native";
import { Link, Redirect, useRouter } from "expo-router";
import { auth } from "./../configs/FirebaseConfig";

export default function Login() {
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={"/(tabs)/home"} /> : <Redirect href={"/login"} />}
    </View>
  );
}
