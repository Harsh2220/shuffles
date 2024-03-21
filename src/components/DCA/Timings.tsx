import Button from "@/src/components/UI/Button";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import React from "react";
import { TextInput, View } from "react-native";

export default function Timings() {
  return (
    <View>
      <Paragraph
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: white[200],
        }}
      >
        Every
      </Paragraph>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 12,
          backgroundColor: white[600],
          borderRadius: 100,
          marginTop: 8,
        }}
      >
        <TextInput
          style={{
            fontSize: 16,
            fontWeight: "600",
            fontFamily: "SF_Semibold",
            paddingLeft: 8,
          }}
          placeholderTextColor={"#BEBFC3"}
          placeholder="00"
        />
        <Button
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: black[800],
            borderColor: black[800],
          }}
          size="small"
          onPress={() => {}}
        >
          Minute
        </Button>
      </View>
    </View>
  );
}
