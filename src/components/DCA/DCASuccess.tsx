import LottieView from "lottie-react-native";
import React from "react";
import { Linking, View } from "react-native";
import Button from "../UI/Button";
import { Heading } from "../UI/Heading";
import { useDCAStore } from "@/src/store/dca";

function DCASuccess() {
  const {txHash} = useDCAStore();
  return (
    <View
      style={{
        padding: 16,
        alignItems: "center",
        gap: 24,
      }}
    >
      <LottieView
        source={require("../../assets/success.json")}
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
        }}
      >
        DCA created Successfully
      </Heading>
      <Button
        onPress={() => {
          Linking.openURL(`https://solscan.io/tx/${txHash}`);
        }}
        style={{
          width: "100%",
        }}
      >
        View on explorer
      </Button>
    </View>
  );
}

export default React.memo(DCASuccess);
