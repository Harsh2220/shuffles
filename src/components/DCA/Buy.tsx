import { Heading } from "@/src/components/UI/Heading";
import { Paragraph } from "@/src/components/UI/Paragraph";
import { white } from "@/src/constants/color";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import DCABuyTokenSheet from "../Sheets/DCABuyTokenSheet";
import Sheet from "../UI/Sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useDCAStore } from "@/src/store/dca";
import ChevronDown from "@/src/assets/Icons/ChevronDown";

export default function Buy() {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["60%", "90%"], []);
  const { buyTokenData } = useDCAStore();

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
          To Buy
        </Paragraph>
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
            marginTop: 8,
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
            {buyTokenData?.logoURI && (
              <Image
                source={{ uri: buyTokenData.logoURI }}
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
              {buyTokenData ? buyTokenData.name : "Select Token"}
            </Heading>
          </View>
          <ChevronDown width={24} height={24} color={"black"} />
        </TouchableOpacity>
      </View>
      <Sheet ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <DCABuyTokenSheet />
      </Sheet>
    </>
  );
}
