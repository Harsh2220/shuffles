import BridgeFrom from "@/src/components/Bridge/BridgeFrom";
import BridgeTo from "@/src/components/Bridge/BridgeTo";
import Receiver from "@/src/components/Bridge/Receiver";
import BridgeConfirmSheet from "@/src/components/Sheets/BridgeConfirmSheet";
import SwapDivider from "@/src/components/SwapDivider";
import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import Sheet from "@/src/components/UI/Sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { View } from "react-native";

export default function Bridge() {
  const confirmBridgeRef = useRef<BottomSheetModal>(null);

  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            gap: 16,
          }}
        >
          <BridgeFrom />
          <SwapDivider />
          <Receiver />
          <BridgeTo />
        </View>
        <Button
          onPress={() => {
            confirmBridgeRef?.current?.present();
          }}
          style={{
            marginTop: 16,
          }}
        >
          Bridge
        </Button>
      </View>
      <Sheet
        style={{
          margin: 16,
        }}
        ref={confirmBridgeRef}
        snapPoints={[340]}
        detached={true}
        bottomInset={50}
      >
        <BridgeConfirmSheet />
      </Sheet>
    </Container>
  );
}
