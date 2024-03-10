import Button from "@/src/components/UI/Button";
import React from "react";
import { Text } from "react-native";
import * as Bip39 from "bip39";

export default function Home() {
  return (
    <Button
      onPress={() => {
        try {
          console.log(Bip39.generateMnemonic());
        } catch (error) {
          console.log(error);
        }
      }}
    >
      Hello
    </Button>
  );
}
