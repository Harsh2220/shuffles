import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import React from "react";
import { TextInput, View } from "react-native";
import { useDCAStore } from "@/src/store";

export default function Orders() {
  const { setCycleSecondsApart } = useDCAStore();
  return (
    <View>
      <Paragraph
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: white[200],
        }}
      >
        Over
      </Paragraph>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 20,
          padding: 16,
          backgroundColor: white[600],
          borderRadius: 100,
          marginTop: 8,
        }}
      >
        <TextInput
        onChangeText={(text) => {
          setCycleSecondsApart((text));
        }}
          style={{
            flex: 1,
            fontSize: 16,
            fontWeight: "600",
            fontFamily: "SF_Semibold",
            paddingLeft: 8,
          }}
          placeholderTextColor={"#BEBFC3"}
          placeholder="00"
        />
        <Heading
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Orders
        </Heading>
      </View>
    </View>
  );
}
