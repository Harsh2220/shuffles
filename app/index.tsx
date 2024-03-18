import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function loader() {
  const router = useRouter();

  async function handleTokens() {
    const tokens = await AsyncStorage.getItem("wallets");
    if (!tokens) {
      router.push("/create");
    } else {
      router.push("/(tabs)/");
    }
  }

  React.useEffect(() => {
    handleTokens();
  }, []);

  return (
    <Container>
      <View>
        <Heading>Loading</Heading>
      </View>
    </Container>
  );
}
