import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Link href={"/login"}>
        <Text>Go to login screen!</Text>
      </Link>
    </View>
  );
}
