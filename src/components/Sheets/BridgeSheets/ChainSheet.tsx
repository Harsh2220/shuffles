import { CHAINS } from "@/src/constants/Chains";
import { Chain } from "@/src/types/Chain";
import { BottomSheetFlatList, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Heading } from "../../UI/Heading";
import useBridgeStore from "@/src/store/bridge";

export default function ChainSheet() {
  const { setChain } = useBridgeStore();
  const { dismiss } = useBottomSheetModal();

  const renderItem = ({ item }: { item: Chain }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setChain(item);
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
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheetFlatList
      data={CHAINS}
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
      renderItem={renderItem}
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
