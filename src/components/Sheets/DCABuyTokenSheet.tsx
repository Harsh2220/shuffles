import useWalletStore from "@/src/store/wallet";
import { IToken } from "@/src/types/wallet";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import TokenCard from "../cards/TokenCard";

const renderItem = ({ item }: { item: IToken }) => <TokenCard token={item} />;

export default function DCABuyTokenList() {
  const { tokens } = useWalletStore();

  return (
    <BottomSheetFlatList
      renderItem={renderItem}
      data={tokens}
      contentContainerStyle={{
        gap: 8,
      }}
    />
  );
}
