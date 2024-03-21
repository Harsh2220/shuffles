import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import React from "react";
import { View } from "react-native";

export default function Bridge() {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading
          style={{
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          Comming Soon
        </Heading>
      </View>
    </Container>
  );
}
