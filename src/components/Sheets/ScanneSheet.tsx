import { BottomSheetProps } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { forwardRef, useMemo } from "react";
import { Heading } from "../UI/Heading";
import Sheet from "../UI/Sheet";

const ScannerSheet = React.forwardRef<BottomSheetModalMethods, unknown>(
  (_, ref) => {
    const snapPoints = useMemo(() => ["80%"], []);

    return (
      <Sheet ref={ref} snapPoints={snapPoints}>
        <Heading>Hello</Heading>
      </Sheet>
    );
  }
);

export default ScannerSheet;
