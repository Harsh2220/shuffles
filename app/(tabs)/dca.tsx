import SwapIcon from "@/src/assets/Icons/SwapIcon";
import Allocate from "@/src/components/DCA/Allocate";
import Buy from "@/src/components/DCA/Buy";
import Orders from "@/src/components/DCA/Orders";
import Timings from "@/src/components/DCA/Timings";
import DCAConfirmSheet from "@/src/components/Sheets/DCAConfirmSheet";
import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import Sheet from "@/src/components/UI/Sheet";
import { black, white } from "@/src/constants/color";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { View } from "react-native";

export default function Dca() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            gap: 16,
          }}
        >
          <Allocate />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              position: "relative",
              height: 24,
            }}
          >
            <View
              style={{ height: 1, width: "100%", backgroundColor: white[500] }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SwapIcon
                width={24}
                height={24}
                color={black[800]}
                style={{
                  paddingHorizontal: 24,
                  backgroundColor: white[800],
                }}
              />
            </View>
          </View>
          <Buy />
          <Timings />
          <Orders />
        </View>
        <Button
          onPress={() => {
            bottomSheetModalRef.current?.present();
          }}
        >
          Confirm DCA
        </Button>
      </View>
      <Sheet
        style={{
          margin: 16,
        }}
        ref={bottomSheetModalRef}
        snapPoints={[450]}
        detached={true}
        bottomInset={50}
      >
        <DCAConfirmSheet />
      </Sheet>
    </Container>
  );
}
