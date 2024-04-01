import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { Heading } from "../UI/Heading";
import Button from "../UI/Button";

export default function SuccessSheet({ onPress }: { onPress: () => void }) {
  return (
    <View
      style={{
        padding: 16,
        alignItems: "center",
        gap: 24,
      }}
    >
      <Image
        source={{
          uri: "https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png",
        }}
        style={{
          width: 150,
          height: 150,
        }}
        contentFit="cover"
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
        onPress={onPress}
        style={{
          width: "100%",
        }}
      >
        View on explorer
      </Button>
    </View>
  );
}
