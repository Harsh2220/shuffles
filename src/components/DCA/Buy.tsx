import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

export default function Buy() {
  return (
    <View>
      <Paragraph
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: white[200],
        }}
      >
        To Buy
      </Paragraph>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: white[800],
          borderWidth: 1,
          borderColor: white[500],
          borderRadius: 100,
          marginTop: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../../../src/assets/images/solana.png")}
            style={{
              width: 36,
              height: 36,
              borderRadius: 50,
            }}
            contentFit="cover"
          />
          <Heading
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Solana
          </Heading>
        </View>
      </View>
    </View>
  );
}
