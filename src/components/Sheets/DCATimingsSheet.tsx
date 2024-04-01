import { useDCAStore } from "@/src/store";
import useWalletStore from "@/src/store/wallet";
import { DCABuyTimings } from "@/src/types/DCA";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { TouchableOpacity, View } from "react-native";
import { Heading } from "../UI/Heading";

const DATA: DCABuyTimings[] = [
  DCABuyTimings.SECOND,
  DCABuyTimings.MINUTE,
  DCABuyTimings.HOUR,
  DCABuyTimings.DAY,
  DCABuyTimings.WEEK,
  DCABuyTimings.MONTH,
];

export default function DCATimingsSheet() {
  const { dismiss } = useBottomSheetModal();
  const { setInputMint, setSellTokenData } = useDCAStore();
  const { tokens } = useWalletStore();

  return (
    <View
      style={{
        padding: 20,
        gap: 16,
      }}
    >
      {DATA.map((el, index) => (
        <TouchableOpacity key={index}>
          <Heading
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            {el}
          </Heading>
        </TouchableOpacity>
      ))}
    </View>
  );
}
