import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import { Ionicons } from "@expo/vector-icons";
import * as Bip39 from "bip39";
import * as Clipboard from "expo-clipboard";
import React, { useState } from "react";
import useWalletStore from "@/src/store/wallet";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Keypair } from "@solana/web3.js";
import { encode } from "bs58";

function Word({
  index,
  value,
  onChange,
}: {
  index: number;
  value: string;
  onChange: (text: string, index: number) => void;
}) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        width: width / 3.5,
      }}
    >
      <Paragraph
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: white[200],
          width: 24,
        }}
      >
        {index + 1}
      </Paragraph>
      <TextInput
        style={styles.input}
        value={value}
        onChange={(e) => {
          onChange(e.nativeEvent.text, index);
        }}
      />
    </View>
  );
}

export default function ImportRecoveryPhraseScreen() {
  const { setCurrentWallet, setWallets } = useWalletStore();
  const [recoveryPhrase, setRecoveryPhrase] = useState(Array(12).fill(""));

  async function handlePaste() {
    const text = await Clipboard.getStringAsync();
    const seedArray = text.split(" ");
    for (let index = 0; index < seedArray.length; index++) {
      recoveryPhrase[index] = seedArray[index];
      setRecoveryPhrase(recoveryPhrase);
    }
  }

  async function handleWallet() {
    const mnemonic = recoveryPhrase.join(" ");
    const seed = Bip39.mnemonicToSeedSync(mnemonic, "").slice(0, 32);
    const keypair = Keypair.fromSeed(seed);
    const wallets = [
      {
        name: "wallet 1",
        seed: mnemonic,
        publicKey: keypair.publicKey.toBase58(),
        secretKey: encode(keypair.secretKey),
      },
    ];
    setWallets(wallets);
    setCurrentWallet(wallets[0]);
  }

  function onChange(word: string, index: number) {
    recoveryPhrase[index] = word;
    setRecoveryPhrase(recoveryPhrase);
    console.log(recoveryPhrase);
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Heading style={styles.headerText}>Import Wallet</Heading>
          <Paragraph style={styles.subHeaderText}>
            Enter your Secret Recovery Phrase below to import your wallet.
          </Paragraph>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 48,
          }}
        >
          <View
            style={{
              gap: 16,
            }}
          >
            {[...Array(6)].map((el, index) => (
              <Word
                key={index}
                index={index}
                onChange={onChange}
                value={recoveryPhrase[index]}
              />
            ))}
          </View>
          <View
            style={{
              gap: 16,
            }}
          >
            {[...Array(6)].map((el, index) => (
              <Word
                key={index}
                index={index + 6}
                onChange={onChange}
                value={recoveryPhrase[index + 6]}
              />
            ))}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.pasteButton} onPress={handlePaste}>
            <Ionicons name="copy-outline" size={18} color="black" />
            <Heading style={styles.pasteButtonText}>
              Paste from Clipboard
            </Heading>
          </TouchableOpacity>
        </View>

        <View>
          <Paragraph style={styles.disclaimerText}>
            Your keys are stored securely within your phone.{"\n"}
            we don't store or share your keys anywhere else.
          </Paragraph>
          <Button onPress={handleWallet}>Import</Button>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: white[200],
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pasteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: white[600],
  },
  pasteButtonText: {
    marginLeft: 10,
    color: black[800],
    fontWeight: "600",
  },
  inputLabel: {
    width: 20,
    fontSize: 16,
    color: black[800],
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderBottomColor: white[200],
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "SF_Semibold",
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    backgroundColor: white[400],
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
  },
  disclaimerText: {
    fontSize: 14,
    color: white[200],
    textAlign: "center",
    marginBottom: 20,
  },
});
