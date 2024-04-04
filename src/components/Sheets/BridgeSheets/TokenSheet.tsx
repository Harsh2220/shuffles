import useBridgeStore from "@/src/store/bridge";
import useWalletStore from "@/src/store/wallet";
import { BridgeToken } from "@/src/types/Bridge";
import { BottomSheetFlatList, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Heading } from "../../UI/Heading";
import { Paragraph } from "../../UI/Paragraph";
import { white } from "@/src/constants/color";
import { BRIDGE_TOKENS } from "@/src/constants/BridgeTokens";

export default function TokenSheet() {
  const { dismiss } = useBottomSheetModal();
  const { setSellToken } = useBridgeStore();

  const renderItem = ({ item }: { item: BridgeToken }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSellToken(item);
          dismiss();
        }}
      >
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image source={{ uri: item.image }} style={styles.assetImage} />
            <View>
              <Heading style={styles.assetName}>{item.name}</Heading>
              <Paragraph
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: white[200],
                }}
              >
                {item.symbol}
              </Paragraph>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheetFlatList
      renderItem={renderItem}
      data={BRIDGE_TOKENS}
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
  },
  assetImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  assetName: {
    fontSize: 18,
    fontWeight: "700",
  },
});
