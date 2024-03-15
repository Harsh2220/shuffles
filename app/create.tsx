import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { black, white } from "@/src/constants/color";
import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { PublicKey, Keypair } from "@solana/web3.js";
import * as Bip39 from "bip39";
import bs58 from "bs58";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Paragraph } from "@/src/components/UI/Paragraph";

export default function Create() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { width, height } = useWindowDimensions();

  async function createWallet() {
    try {
      setIsLoading(true);
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
      await AsyncStorage.setItem("wallets", JSON.stringify(wallets));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            maxWidth: width / 1.3,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Heading
              style={{
                fontSize: width / 10,
                fontWeight: "600",
                color: black[700],
                textAlign: "center",
              }}
            >
              Shuffling assets Over Shuffles
            </Heading>
            <Paragraph
              style={{
                fontSize: width / 24,
                fontWeight: "500",
                color: white[200],
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Your Passport to Seamless Cross-Chain Trading on Mobile
            </Paragraph>
          </View>
          <View
            style={{
              marginTop: 16,
            }}
          >
            <Button
              onPress={createWallet}
              style={{
                marginVertical: 8,
              }}
              isLoading={isLoading}
            >
              Create wallet
            </Button>
            <Button
              variant="outlined"
              onPress={createWallet}
              style={{
                marginVertical: 8,
              }}
            >
              Import an Existing Wallet
            </Button>
          </View>
          <Paragraph
            style={{
              fontSize: width / 28,
              fontWeight: "500",
              color: white[200],
              textAlign: "center",
              marginTop: 8,
            }}
          >
            by using Shuffles, you agree to accept our{" "}
            <Paragraph
              style={{
                fontWeight: "600",
                color: white[100],
              }}
            >
              Terms of Use{" "}
            </Paragraph>
            and{" "}
            <Paragraph
              style={{
                fontWeight: "600",
                color: white[100],
              }}
            >
              Privacy Policy
            </Paragraph>
          </Paragraph>
        </View>
      </View>
    </Container>
  );
}
