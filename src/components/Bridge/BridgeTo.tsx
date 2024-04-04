import ChevronDown from "@/src/assets/Icons/ChevronDown";
import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import useBridgeStore from "@/src/store/bridge";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import ChainSheet from "../Sheets/BridgeSheets/ChainSheet";
import Sheet from "../UI/Sheet";

export default function BridgeTo() {
  const { chain, amount, receiver } = useBridgeStore();
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
          Choose Network to Receive
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
          <TouchableOpacity
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
            onPress={() => {
              bottomSheetModalRef.current?.present();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {chain && (
                <Image
                  source={{
                    uri: chain.image,
                  }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 50,
                  }}
                  contentFit="cover"
                />
              )}
              <Heading
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                {chain ? chain.name : "Select Chain"}
              </Heading>
            </View>
            <ChevronDown width={24} height={24} color={"black"} />
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              marginVertical: 24,
            }}
          >
            <TextInput
              value={receiver && chain ? (Number(amount) - 1.2).toFixed(2).toString() : ""}
              editable={false}
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
        <ChainSheet />
      </Sheet>
    </>
  );
}
