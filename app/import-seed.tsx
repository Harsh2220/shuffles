import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

function Word({ index, word }: { index: number; word: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
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
        {index}
      </Paragraph>
      <TextInput
        style={styles.input}
        value={word}
        placeholder={`${index + 1}`}
      />
    </View>
  );
}

export default function ImportRecoveryPhraseScreen() {
  const [recoveryPhrase, setRecoveryPhrase] = useState(Array(12).fill(""));

  const handlePaste = () => {};

  const handleManualEntry = () => {};

  const handleImport = () => {};

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
              <Word key={index} index={index + 1} word="open" />
            ))}
          </View>
          <View
            style={{
              gap: 16,
            }}
          >
            {[...Array(6)].map((el, index) => (
              <Word key={index} index={index + 7} word="open" />
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
          <Button onPress={() => {}}>Import</Button>
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
    paddingHorizontal: 40,
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
