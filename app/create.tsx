import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { white } from "@/src/constants/color";
import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { PublicKey, Keypair } from "@solana/web3.js";
import * as Bip39 from "bip39";
import bs58 from "bs58";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Create() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { width, height } = useWindowDimensions();

  async function createWallet() {
    const mnemonic = Bip39.generateMnemonic();
    const seed = Bip39.mnemonicToSeedSync(mnemonic, "").slice(0, 32);
    const keypair = Keypair.fromSeed(seed);
    const wallets = [
      {
        name: "wallet 1",
        seed: mnemonic,
        publicKey: keypair.publicKey.toBase58(),
        secretKey: bs58.encode(keypair.secretKey),
      },
    ];

    const allWallets = await AsyncStorage.setItem(
      "wallets",
      JSON.stringify(wallets)
    );

    const w = await AsyncStorage.getItem("wallets");

    console.log(allWallets);
  }

  return (
    <Container>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{
          height: height / 2,
          width: width,
        }}
      />
      <View
        style={{
          flex: 1,
          padding: 16,
          zIndex: 2,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 48,
          }}
        >
          <Heading
            style={{
              fontSize: 48,
              fontWeight: "600",
              color: white[700],
            }}
          >
            Manage your crypto
          </Heading>
          <Heading
            style={{
              fontSize: 48,
              fontWeight: "600",
              color: white[700],
            }}
          >
            and enjoy
          </Heading>
        </View>
        <Button
          onPress={createWallet}
          style={{
            width: "100%",
            marginVertical: 8,
          }}
          isLoading={isLoading}
        >
          Create wallet
        </Button>
      </View>
    </Container>
  );
}
