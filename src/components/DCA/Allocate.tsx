import Button from "@/src/components/UI/Button";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import { Image } from "expo-image";
import React from "react";
import { TextInput, View } from "react-native";
import Sheet from "../UI/Sheet";
import DCASellTokenSheet from "../Sheets/DCASellTokenSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function Allocate() {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["60%", "90%"], []);

  return (
    <>
      <View>
        <Paragraph
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: white[200],
          }}
        >
          I want to allocate
        </Paragraph>
        <View
          style={{
            borderRadius: 32,
            marginTop: 8,
            borderWidth: 1,
            borderColor: white[500],
            backgroundColor: "#F1F3F4",
            padding: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: white[800],
              borderWidth: 1,
              borderColor: white[500],
              borderRadius: 100,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={require("../../../src/assets/images/solana.png")}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 50,
                }}
                contentFit="cover"
              />
              <View>
                <Heading
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Jupiter
                </Heading>
                <Paragraph
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: white[100],
                  }}
                >
                  1000 JUP
                </Paragraph>
              </View>
            </View>
            <Button
              onPress={() => {}}
              size="small"
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: "black",
              }}
            >
              Use Max
            </Button>
          </View>
          <View
            style={{
              alignItems: "center",
              marginVertical: 24,
            }}
          >
            <TextInput
              style={{
                fontSize: 58,
                fontWeight: "600",
                fontFamily: "SF_Semibold",
              }}
              placeholderTextColor={"#BEBFC3"}
              placeholder="00"
            />
          </View>
        </View>
      </View>
      <Sheet ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <DCASellTokenSheet />
      </Sheet>
    </>
  );
}
