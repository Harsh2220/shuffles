import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import useWalletStore from "@/src/store/wallet";
import { Keypair } from "@solana/web3.js";
import * as Bip39 from "bip39";
import bs58 from "bs58";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { View, useWindowDimensions } from "react-native";

export default function Create() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const { setWallets, setCurrentWallet } = useWalletStore();

  async function generateWallet() {
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
      setWallets(wallets);
      setCurrentWallet(wallets[0]);
      router.push("/backup");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleImport() {
    router.push("/import");
  }

  return (
    <Container>
      <Image
        source={require("../src/assets/images/onboarding.png")}
        style={{
          height: height / 2.5,
          width: width / 1.2,
          alignSelf: "center",
          marginVertical: 32,
        }}
        contentFit="contain"
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
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
              onPress={generateWallet}
              style={{
                marginVertical: 8,
              }}
              textStyle={{
                fontSize: width / 25,
              }}
              isLoading={isLoading}
            >
              Create wallet
            </Button>
            <Button
              variant="outlined"
              onPress={handleImport}
              style={{
                marginVertical: 8,
              }}
              textStyle={{
                fontSize: width / 25,
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
