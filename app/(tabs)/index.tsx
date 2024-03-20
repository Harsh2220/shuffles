import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import useWalletData from "@/src/hooks/useWalletData";
import useWalletStore from "@/src/store/wallet";
import { IToken } from "@/src/types/wallet";
import { Image } from "expo-image";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const renderItem = ({ item }: { item: IToken }) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View>
          <Heading style={styles.assetName}>{item.name}</Heading>
          <Paragraph
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: white[200],
            }}
          >
            {item.balance}
          </Paragraph>
        </View>
      </View>
      <Heading style={styles.assetName}>${item.price}</Heading>
    </View>
  );
};

export default function HomeScreen() {
  const { handleBalance, handleTokens } = useWalletData();
  const { balance, tokens } = useWalletStore();

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.walletSummary}>
          <Heading style={styles.balance}>${balance}</Heading>
          <View style={styles.buttonContainer}>
            <Button onPress={() => {}} color="black" style={styles.button}>
              withdraw
            </Button>
            <Button onPress={() => {}} color="black" style={styles.button}>
              Deposit
            </Button>
          </View>
          <Heading style={styles.assetsHeading}>My Assets</Heading>
        </View>
        <FlatList
          renderItem={renderItem}
          data={tokens}
          contentContainerStyle={{
            gap: 8,
          }}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  walletSummary: {
    alignItems: "center",
    justifyContent: "center",
  },
  balanceTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 45,
    fontWeight: "600",
  },
  change: {
    fontSize: 16,
    color: "green",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 50,
    paddingVertical: 14,
  },
  buttonText: {
    color: "white",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  assetName: {
    fontSize: 18,
    fontWeight: "700",
  },
  assetBalance: {
    fontWeight: "500",
    fontSize: 16,
  },
  assetChange: {
    fontSize: 14,
    color: "black",
  },
  assetsHeading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
});
