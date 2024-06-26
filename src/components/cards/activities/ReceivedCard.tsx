import ForwardArrow from "@/src/assets/Icons/ForwardArrow";
import { white } from "@/src/constants/color";
import { Image } from "expo-image";
import { View } from "react-native";
import { Heading } from "../../UI/Heading";

export default function ReceivedCard() {
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
          source={require("../../../assets/images/solana.png")}
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
            Received
          </Heading>
          <Heading
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            SOL
          </Heading>
        </View>
      </View>
      <Heading
        style={{
          fontSize: 16,
          fontWeight: "700",
          color: "#09CD6A",
        }}
      >
        + 500 USDC
      </Heading>
    </View>
  );
}
