import BridgeFrom from "@/src/components/Bridge/BridgeFrom";
import BridgeTo from "@/src/components/Bridge/BridgeTo";
import Receiver from "@/src/components/Bridge/Receiver";
import BridgeConfirmSheet from "@/src/components/Sheets/BridgeConfirmSheet";
import SwapDivider from "@/src/components/SwapDivider";
import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import Sheet from "@/src/components/UI/Sheet";
import useBridge from "@/src/hooks/Bridge/useBridge";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import "@wormhole-foundation/connect-sdk-evm-tokenbridge";
import "@wormhole-foundation/connect-sdk-solana-tokenbridge";
import React, { useRef } from "react";
import { View } from "react-native";

export default function Bridge() {
  const successBridgeRef = useRef<BottomSheetModal>(null);
  const { bridgeTokens } = useBridge();
  const [loading, setLoading] = React.useState(false);

  async function handleBridge() {
    try {
      setLoading(true);
      await bridgeTokens();
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
          isLoading={loading}
          onPress={async () => {
            setLoading(true);
            await bridgeTokens();
            setLoading(false);
            
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
        ref={successBridgeRef}
        snapPoints={[340]}
        detached={true}
        bottomInset={50}
      >
        <BridgeConfirmSheet />
      </Sheet>
    </Container>
  );
}
