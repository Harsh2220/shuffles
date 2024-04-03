import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import Button from "../UI/Button";
import { Heading } from "../UI/Heading";

function DCAError() {
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
        }}
      >
        Failed to create DCA
      </Heading>
      <Button
        onPress={() => {}}
        style={{
          width: "100%",
        }}
      >
        View on explorer
      </Button>
    </View>
  );
}

export default React.memo(DCAError);
