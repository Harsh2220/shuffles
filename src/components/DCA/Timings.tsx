import Button from "@/src/components/UI/Button";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import React from "react";
import { TextInput, View } from "react-native";
import Sheet from "../UI/Sheet";
import DCATimingsSheet from "../Sheets/DCATimingsSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useDCAStore } from "@/src/store";

export default function Timings() {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["35%", "60%"], []);
  const {setInAmountPerCycle} = useDCAStore();
  return (
    <View>
      <Paragraph
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: white[200],
        }}
      >
        Every
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
        onChange={(e) => setInAmountPerCycle(e.nativeEvent.text)}
          style={{
            fontSize: 16,
            fontWeight: "600",
            fontFamily: "SF_Semibold",
            paddingLeft: 8,
          }}
          placeholderTextColor={"#BEBFC3"}
          placeholder="00"
        />
        <Button
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: black[800],
            borderColor: black[800],
          }}
          size="small"
          onPress={() => {
            bottomSheetModalRef?.current?.present();
          }}
        >
          Minute
        </Button>
      </View>
      <Sheet ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <DCATimingsSheet />
      </Sheet>
    </View>
  );
}
