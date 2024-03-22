import { Heading } from "@/src/components/UI/Heading";
import { JupTokens } from "@/src/types/wallet";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function JupTokenCard({ token }: { token: JupTokens }) {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={{ uri: token.logoURI }} style={styles.assetImage} />
        <View>
          <Heading style={styles.assetName}>{token.name}</Heading>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
  },
  assetImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  assetName: {
    fontSize: 18,
    fontWeight: "700",
  },
});
