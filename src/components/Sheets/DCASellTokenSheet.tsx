import useWalletStore from "@/src/store/wallet";
import { IToken } from "@/src/types/wallet";
import { BottomSheetFlatList, useBottomSheetModal } from "@gorhom/bottom-sheet";
import TokenCard from "../cards/TokenCard";
import { TouchableOpacity } from "react-native";
import { useDCAStore } from "@/src/store/dca";
import { PublicKey } from "@solana/web3.js";
import BottomSheetModal from "@gorhom/bottom-sheet";

export default function DCASellTokenSheet() {
  const { dismiss } = useBottomSheetModal();
  const { setInputMint, setSellTokenData } = useDCAStore();
  const { tokens } = useWalletStore();

  const renderItem = ({ item }: { item: IToken }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setInputMint(new PublicKey(item.address));
          setSellTokenData(item);
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
