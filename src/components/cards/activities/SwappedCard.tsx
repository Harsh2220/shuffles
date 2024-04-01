import ForwardArrow from "@/src/assets/Icons/ForwardArrow";
import { white } from "@/src/constants/color";
import { Image } from "expo-image";
import { View } from "react-native";
import { Heading } from "../../UI/Heading";
import { SwapActivity } from "@/src/types/Activitiy";
import { useEffect, useState } from "react";
import { getTokenInfo } from "@/src/utils/tokenInfo";

export default function SwappedCard({ data }: { data: SwapActivity }) {
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
        <Image
          source={{uri:inToken?.result.image}}
          style={{
            width: 42,
            height: 42,
            borderRadius: 50,
          }}
          contentFit="cover"
        />
        <View>
          <Heading
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: white[200],
            }}
          >
            Swapped
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
          color: "#09CD6A",
        }}
      >
        + {data.inAmount.toFixed(2)} {outToken?.result.symbol}
      </Heading>
    </View>
  );
}
