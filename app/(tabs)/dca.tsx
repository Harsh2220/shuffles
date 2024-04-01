import Allocate from "@/src/components/DCA/Allocate";
import Buy from "@/src/components/DCA/Buy";
import Orders from "@/src/components/DCA/Orders";
import Timings from "@/src/components/DCA/Timings";
import DCAConfirmSheet from "@/src/components/Sheets/DCAConfirmSheet";
import SuccessSheet from "@/src/components/Sheets/SuccessSheet";
import SwapDivider from "@/src/components/SwapDivider";
import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import Sheet from "@/src/components/UI/Sheet";
import useCreateDCA from "@/src/hooks/DCA/useCreateDCA";
import useGetDCA from "@/src/hooks/DCA/useGetDCA";
import { useDCAStore } from "@/src/store";
import { set } from "@coral-xyz/anchor/dist/cjs/utils/features";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { View } from "react-native";

export default function Dca() {
  const createDCARef = useRef<BottomSheetModal>(null);
  const successDCARef = useRef<BottomSheetModal>(null);
  const { createDCA } = useCreateDCA();
  const [isloading, setIsLoading] = React.useState(false);

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
          onPress={async () => {
            // setIsLoading(true);
            // await createDCA();
            // setIsLoading(false);
            // createDCARef.current?.present();
            successDCARef?.current?.present();
          }}
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
        snapPoints={[400]}
        detached={true}
        bottomInset={50}
      >
        <DCAConfirmSheet />
      </Sheet>
      <Sheet
        style={{
          margin: 16,
        }}
        ref={successDCARef}
        snapPoints={[350]}
        detached={true}
        bottomInset={50}
      >
        <SuccessSheet />
      </Sheet>
    </Container>
  );
}
