import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import Button from "../UI/Button";
import { Heading } from "../UI/Heading";
import { Image } from "expo-image";

export default function SuccessSheet() {
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
