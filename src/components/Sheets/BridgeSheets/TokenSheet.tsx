import useBridgeStore from "@/src/store/bridge";
import useWalletStore from "@/src/store/wallet";
import { IToken } from "@/src/types/wallet";
import { BottomSheetFlatList, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native";
import TokenCard from "../../cards/TokenCard";

export default function TokenSheet() {
  const { dismiss } = useBottomSheetModal();
  const { setSellToken } = useBridgeStore();
  const { tokens } = useWalletStore();

  const renderItem = ({ item }: { item: IToken }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSellToken(item);
          dismiss();
        }}
      >
        <TokenCard token={item} />
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheetFlatList
      renderItem={renderItem}
      data={tokens}
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    />
  );
}
