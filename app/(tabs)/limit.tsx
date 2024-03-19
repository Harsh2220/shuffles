import Button from "@/src/components/UI/Button";
import { Heading } from "@/src/components/UI/Heading";
import Sheet from "@/src/components/UI/Sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";

export default function Limit() {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // renders
  return (
    <>
      <Button onPress={handlePresentModalPress}>snkda</Button>
      <Sheet ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <Heading>HEllo</Heading>
      </Sheet>
    </>
  );
}
