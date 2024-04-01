import useWalletStore from "@/src/store/wallet";
import { IToken, JupTokens } from "@/src/types/wallet";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import TokenCard from "../cards/TokenCard";
import useJupTokens from "@/src/hooks/DCA/useJupTokens";
import JupTokenCard from "../cards/JupTokenCard";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Paragraph } from "../UI/Paragraph";
import { useDCAStore } from "@/src/store";
import { PublicKey } from "@solana/web3.js";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";

export default function DCABuyTokenSheet() {
  const { getJupTokens, isLoading, jupTokens} = useJupTokens()
  const { tokens } = useWalletStore();
  const { dismiss } = useBottomSheetModal();
  const { setOutputMint, setBuyTokenData } = useDCAStore();

  const renderItem = ({ item }: { item: JupTokens }) =>  {
    return (
      <TouchableOpacity onPress={()=> {
        setOutputMint(new PublicKey(item.address));
        setBuyTokenData(item);
        dismiss();
      }}>
        <JupTokenCard token={item} />
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    getJupTokens();
  }, []);


  return (
    isLoading ? (
      <View>
        <Paragraph>Loading...</Paragraph>
      </View>
    ) : (
      <BottomSheetFlatList
        data={jupTokens}
        contentContainerStyle={{
          gap: 16,
          padding: 16
        }}
        renderItem={renderItem}
      />
    )
  );
}
