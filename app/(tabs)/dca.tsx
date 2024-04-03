import Allocate from "@/src/components/DCA/Allocate";
import Buy from "@/src/components/DCA/Buy";
import Orders from "@/src/components/DCA/Orders";
import Timings from "@/src/components/DCA/Timings";
import DCAConfirmSheet from "@/src/components/Sheets/DCAConfirmSheet";
import SwapDivider from "@/src/components/SwapDivider";
import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import Sheet from "@/src/components/UI/Sheet";
import useCreateDCA from "@/src/hooks/DCA/useCreateDCA";
import { useDCAStore } from "@/src/store/dca";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { View } from "react-native";

export default function Dca() {
  const createDCARef = useRef<BottomSheetModal>(null);
  const { createDCA } = useCreateDCA();
  const { txHash, error } = useDCAStore();
  const [isloading, setIsLoading] = React.useState(false);

  async function handleDCA() {
    try {
      {
        setIsLoading(true);
        // await createDCA();
        createDCARef.current?.present();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
          <Allocate />
          <SwapDivider />
          <Buy />
          <Timings />
          <Orders />
        </View>
        <Button
          isLoading={isloading}
          onPress={handleDCA}
          style={{
            marginTop: 16,
          }}
        >
          Confirm DCA
        </Button>
      </View>
      <Sheet
        style={{
          margin: 16,
        }}
        ref={createDCARef}
        snapPoints={[error ? 380 : txHash ? 350 : 400]}
        detached={true}
        bottomInset={50}
      >
        <DCAConfirmSheet />
      </Sheet>
    </Container>
  );
}
