import ChevronRight from "@/src/assets/Icons/ChevronRight";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import useWalletStore from "@/src/store/wallet";
import React from "react";
import { View } from "react-native";

export default function Settings() {
  const { currentWallet, balance } = useWalletStore();

  return (
    <Container>
      <View
        style={{
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: white[700],
            borderRadius: 12,
          }}
        >
          <View>
            <Heading
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {currentWallet?.name}
            </Heading>
            <Paragraph
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: black[100],
              }}
            >
              ${balance}
            </Paragraph>
          </View>
          <ChevronRight width={24} height={24} color={"black"} />
        </View>
      </View>
    </Container>
  );
}
