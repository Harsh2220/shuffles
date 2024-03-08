import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { white } from "@/src/constants/Colors";
import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import solanaWeb3 from "@solana/web3.js";
import bip39 from "bip39";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Create() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { width, height } = useWindowDimensions();

  const generateSolanaAddress = async () => {
    let mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    let a = new Uint8Array(seed.toJSON().data.slice(0, 32));
    var kp = solanaWeb3.Keypair.fromSeed(a);

    console.log("Public Key:", kp.publicKey.toString());
    console.log("Secret Key:", kp.secretKey);
    console.log("Seed Phrase:", mnemonic);
    console.log("Keypair:", kp);
  };

  return (
    <Container>
      <Image
        source={{
          uri: "",
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
          onPress={open}
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
