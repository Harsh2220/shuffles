import ForwardArrow from "@/src/assets/Icons/ForwardArrow";
import { white } from "@/src/constants/color";
import { Image } from "expo-image";
import { View } from "react-native";
import { Heading } from "../../UI/Heading";
import { SwapActivity } from "@/src/types/Activitiy";
import { useEffect, useState } from "react";
import { getTokenInfo } from "@/src/utils/tokenInfo";

export default function ApprovedDCACard({ data }: { data: SwapActivity }) {
  const [inToken, setInToken] = useState<any>(null);
  const [outToken, setOutToken] = useState<any>(null);
  async function tokenInfo() {
    const [inToken, outToken] = await Promise.all([getTokenInfo(data.inToken), getTokenInfo(data.outToken)]);
    setInToken(inToken);
    setOutToken(outToken);

  }
  useEffect(() => {
    tokenInfo();
  }
    , [data]);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <View
          style={{
            position: "relative",
          }}
        >
          <Image
            source={{ uri: inToken?.result.image }}
            style={{
              width: 42,
              height: 42,
              borderRadius: 50,
            }}
            contentFit="cover"
          />
          <Image
            source={{ uri: outToken?.result.image }}
            style={{
              width: 16,
              height: 16,
              borderRadius: 50,
              position: "absolute",
              bottom: 0,
              right: 0,
              borderWidth: 1,
              borderColor: white[800],
            }}
            contentFit="cover"
          />
        </View>
        <View>
          <Heading
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: white[200],
            }}
          >
            Approved DCA
          </Heading>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Heading
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {inToken?.result.symbol}
            </Heading>
            <ForwardArrow width={12} height={12} color={"black"} />
            <Heading
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {outToken?.result.symbol}
            </Heading>
          </View>
        </View>
      </View>
      <Heading
        style={{
          fontSize: 16,
          fontWeight: "700",
          color: "#E63737",
        }}
      >
        - {data.outAmount.toFixed(2)} {inToken?.result.symbol}
      </Heading>
    </View>
  );
}
