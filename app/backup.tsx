import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { black, white } from "@/src/constants/color";
import React from "react";
import { View } from "react-native";

function Word({ index, word }: { index: number; word: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
      }}
    >
      <Paragraph
        style={{
          fontSize: 20,
          fontWeight: "500",
          color: white[200],
          width: 24,
        }}
      >
        {index}
      </Paragraph>
      <Paragraph
        style={{
          fontSize: 20,
          fontWeight: "500",
          color: white[200],
        }}
      >
        {word}
      </Paragraph>
    </View>
  );
}

export default function Backup() {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 48,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Heading
            style={{
              fontSize: 36,
              fontWeight: "600",
              color: black[700],
            }}
          >
            Bro, Back it up
          </Heading>
          <Paragraph
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: white[200],
              marginTop: 8,
            }}
          >
            Store your Secret Recovery Phrase in a safe location over which you
            have exclusive control.
          </Paragraph>
          <View
            style={{
              marginVertical: 48,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 48,
              }}
            >
              <View
                style={{
                  gap: 4,
                }}
              >
                {[...Array(6)].map((el, index) => (
                  <Word key={index} index={index + 1} word="open" />
                ))}
              </View>
              <View
                style={{
                  gap: 4,
                }}
              >
                {[...Array(6)].map((el, index) => (
                  <Word key={index} index={index + 7} word="open" />
                ))}
              </View>
            </View>
            <Paragraph
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: white[200],
                textAlign: "center",
                marginTop: 48,
              }}
            >
              Copy to ClipBoard
            </Paragraph>
          </View>
        </View>
        <Button onPress={() => {}}>Continue</Button>
      </View>
    </Container>
  );
}
