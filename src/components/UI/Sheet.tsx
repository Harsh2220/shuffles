import { black, white } from "@/src/constants/color";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { useCallback } from "react";

const Sheet = React.forwardRef<BottomSheetModalMethods, BottomSheetProps>(
  (props, ref) => {
    const renderBackdrop = useCallback(
      (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        index={0}
        ref={ref}
        handleIndicatorStyle={{
          width: "10%",
          backgroundColor: white[100],
        }}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: white[500],
        }}
        {...props}
      >
        {props.children}
      </BottomSheetModal>
    );
  }
);

export default Sheet;
