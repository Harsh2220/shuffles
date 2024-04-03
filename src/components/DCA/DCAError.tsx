import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import Button from "../UI/Button";
import { Heading } from "../UI/Heading";
import { useBottomSheet, useBottomSheetModal } from "@gorhom/bottom-sheet";

function DCAError() {
  const { dismiss } = useBottomSheetModal();

  return (
    <View
      style={{
        padding: 16,
        alignItems: "center",
        gap: 24,
      }}
    >
      <LottieView
        source={require("../../assets/error.json")}
        style={{
          width: 150,
          height: 150,
        }}
        autoPlay
        loop={false}
      />
      <Heading
        style={{
          fontSize: 24,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        We are unable to process your transaction
      </Heading>
      <Button
        onPress={dismiss}
        style={{
          width: "100%",
        }}
      >
        Close
      </Button>
    </View>
  );
}

export default React.memo(DCAError);
