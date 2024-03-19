import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/src/components/UI/Button";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import Container from "@/src/components/UI/Container";
import { white } from "@/src/constants/color";

export default function ImportSuccessScreen() {
  const walletAddress = "0x05ab...96ce";
  const balance = "0.00 ETH";

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
          <Heading style={styles.headerText}>Import Successfull</Heading>
          <Paragraph style={styles.subHeaderText}>
            Your Wallet was imported
          </Paragraph>
        </View>

        <LinearGradient
          colors={["#8357FF", "#7F7FD5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <Heading style={styles.walletAddress}>{walletAddress}</Heading>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Paragraph style={styles.label}>My Wallet</Paragraph>
            <Paragraph style={styles.balance}>{balance}</Paragraph>
          </View>
        </LinearGradient>
        <View>
          <Paragraph style={styles.disclaimerText}>
            Your keys are stored securely within your phone.{"\n"}
            we don't store or share your keys anywhere else.
          </Paragraph>
          <Button onPress={() => {}}>View Wallet</Button>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: white[200],
    marginBottom: 30,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    height: 230,
    justifyContent: "space-between",
  },
  walletAddress: {
    color: white[700],
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  label: {
    color: white[700],
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "600",
  },
  balance: {
    color: white[700],
    fontSize: 16,
    fontWeight: "600",
  },
  disclaimerText: {
    fontSize: 14,
    color: white[200],
    textAlign: "center",
    marginBottom: 20,
  },
});
