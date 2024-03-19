import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import useWalletStore from "@/src/store/wallet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function loader() {
  const router = useRouter();
  const { setWallets, setCurrentWallet } = useWalletStore();

  async function handleTokens() {
    const wallets = await AsyncStorage.getItem("wallets");
    if (!wallets) {
      router.replace("/create");
    } else {
      setWallets(JSON.parse(wallets));
      setCurrentWallet(JSON.parse(wallets)[0]);
      router.replace("/(tabs)/");
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
