import CopyIcon from "@/src/assets/Icons/CopyIcon";
import React from "react";
import { TouchableOpacity, View, useWindowDimensions } from "react-native";
import QRCodeStyled from "react-native-qrcode-styled";
import { Heading } from "../UI/Heading";
import { Paragraph } from "../UI/Paragraph";
import { white } from "@/src/constants/color";
import useWalletStore from "@/src/store/wallet";
import formatAddress from "@/src/utils/formatAddress";

export default function DepositSheet() {
  const { height, width } = useWindowDimensions();
  const { currentWallet } = useWalletStore();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Heading
        style={{
          fontSize: 22,
          fontWeight: "700",
          marginTop: 24,
        }}
      >
        Deposit
      </Heading>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          marginTop: 12,
        }}
      >
        <Paragraph
          style={{
            fontWeight: "500",
            fontSize: 14,
            color: white[200],
          }}
        >
          {formatAddress(currentWallet?.publicKey!)}
        </Paragraph>
        <CopyIcon width={16} height={16} color={white[200]} />
      </TouchableOpacity>
      {currentWallet && (
        <QRCodeStyled
          data={currentWallet?.publicKey}
          style={{
            backgroundColor: "transparent",
            marginTop: 32,
          }}
          pieceSize={(height / width) * 4}
          color={"white"}
          gradient={{
            options: {
              colors: ["black"],
            },
          }}
          outerEyesOptions={{
            borderRadius: 24,
          }}
          innerEyesOptions={{
            borderRadius: 8,
          }}
          pieceBorderRadius={6}
          logo={{
            href: require("../../assets/images/icon.png"),
            padding: 0,
            scale: 1,
            hidePieces: true,
          }}
        />
      )}
    </View>
  );
}
