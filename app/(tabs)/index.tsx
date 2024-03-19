import { IToken, getTokenBalance } from "@/src/utils/balance";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { Heading } from "@/src/components/UI/Heading";
import Button from "@/src/components/UI/Button";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import Container from "@/src/components/UI/Container";
import { Image } from "expo-image";

export default function HomeScreen() {
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [assets, setAssets] = useState<IToken[]>([]);

  async function getAssets() {
    const tokenList = await getTokenBalance("3dTSLCGStegkuoU6dc75DbRdJk4rKV3d5ZCZdSWbTcQv");
    if (totalBalance != 0) return;
    setAssets(tokenList);
    for (let index = 0; index < tokenList.length; index++) {
      const token = tokenList[index];
      setTotalBalance((prev) => (prev + Number(token.price.substring(0, 3))));
    }
    return tokenList;
  }

  useEffect(() => {
    getAssets();
  }
    ,[]);
  return (
    <Container>
      <ScrollView style={styles.container}>
        <View style={styles.walletSummary}>
          <Heading style={styles.balance}>${totalBalance}</Heading>
          <View style={styles.buttonContainer}>
            <Button onPress={() => { }}
              color="black"
              style={styles.button}
            >withdraw</Button>
            <Button onPress={() => { }}
              color="black"
              style={styles.button}
            >Deposit</Button>
          </View>
          <Heading style={styles.assetsHeading}>My Assets</Heading>
        </View>
        {assets.map((asset, index) => (
          <View key={index} style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Image
                source={{ uri: asset.image }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
              <View>
                <Heading style={styles.assetName}>{asset.name}</Heading>
                <Paragraph style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: white[200],
                }}>{asset.balance} {asset.symbol}</Paragraph>
              </View>
            </View>
            <Heading style={styles.assetName}>${asset.price}</Heading>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  walletSummary: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 45,
    fontWeight: '600',
  },
  change: {
    fontSize: 16,
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    width: '100%',
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 50,
    paddingVertical: 14,
  },
  buttonText: {
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  assetName: {
    fontSize: 18,
    fontWeight: '700',
  },
  assetBalance: {
    fontWeight: '500',
    fontSize: 16,
  },
  assetChange: {
    fontSize: 14,
    color: 'black',
  },
  assetsHeading: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  }
});