import Button from "@/src/components/UI/Button";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import { Image } from "expo-image";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Sheet from "../UI/Sheet";
import DCASellTokenSheet from "../Sheets/DCASellTokenSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useDCAStore } from "@/src/store/dca";
import { useState } from "react";

export default function Allocate() {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["60%", "90%"], []);
  const { sellTokenData } = useDCAStore();
  const { inAmount, setInAmount } = useDCAStore();
  const [amount, setAmount] = useState<string>("");
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
            <TouchableOpacity
              onPress={() => {
                bottomSheetModalRef.current?.present();
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {sellTokenData?.image && (
                <Image
                  source={{ uri: sellTokenData.image }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 50,
                  }}
                  contentFit="cover"
                />
              )}
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Heading
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {sellTokenData ? sellTokenData.name : "Select Token"}
                </Heading>
                {sellTokenData && (
                  <Paragraph
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: white[100],
                    }}
                  >
                    {sellTokenData?.balance} {sellTokenData?.symbol}
                  </Paragraph>
                )}
              </View>
            </TouchableOpacity>
            <Button
              onPress={() => {
                setAmount("10");
              }}
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
              keyboardType="decimal-pad"
              value={inAmount.toString()}
              onChangeText={(text) => setInAmount(text)}
              style={{
                fontSize: 58,
                fontWeight: "600",
                fontFamily: "SF_Semibold",
              }}
              placeholderTextColor={white[200]}
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
