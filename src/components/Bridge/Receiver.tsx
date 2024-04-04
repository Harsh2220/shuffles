import CopyIcon from "@/src/assets/Icons/CopyIcon";
import Button from "@/src/components/UI/Button";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import useBridgeStore from "@/src/store/bridge";
import React from "react";
import * as Clipboard from "expo-clipboard";
import { TextInput, View } from "react-native";
import formatAddress from "@/src/utils/formatAddress";

export default function Receiver() {
  const { setReceiver, receiver, amount } = useBridgeStore();

  async function handlePaste() {
    const text = await Clipboard.getStringAsync();
    setReceiver(text);
  }

  return (
    <View>
      <Paragraph
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: white[200],
        }}
      >
        Enter EVM Address
      </Paragraph>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 6,
          paddingLeft: 20,
          backgroundColor: white[600],
          borderRadius: 100,
          marginTop: 8,
        }}
      >
        <TextInput
          value={
            receiver ?
              formatAddress(receiver) : ""}
          onChange={(e) => {
            setReceiver(e.nativeEvent.text);
          }}
          style={{
            flex: 1,
            fontSize: 16,
            fontWeight: "600",
            fontFamily: "SF_Semibold",
            paddingLeft: 8,
          }}
          placeholderTextColor={"#BEBFC3"}
          placeholder="0x85F0....aaeA"
        />
        <Button
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: black[800],
            borderColor: black[800],
            gap: 6,
          }}
          size="small"
          onPress={handlePaste}
          icon={<CopyIcon width={16} height={16} color="white" />}
          iconPosition="left"
        >
          Paste
        </Button>
      </View>
    </View>
  );
}
