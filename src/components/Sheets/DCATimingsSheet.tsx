import { useDCAStore } from "@/src/store/dca";
import useWalletStore from "@/src/store/wallet";
import { DCABuyTimings } from "@/src/types/DCA";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { TouchableOpacity, View } from "react-native";
import { Heading } from "../UI/Heading";
import Check from "@/src/assets/Icons/Check";

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
  const { orderPer, setOrderPer } = useDCAStore();

  return (
    <View
      style={{
        padding: 20,
        gap: 16,
      }}
    >
      {DATA.map((el, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          onPress={() => {
            setOrderPer(el);
            dismiss();
          }}
        >
          <Heading
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            {el}
          </Heading>
          {orderPer === el && <Check width={24} height={24} color={"black"} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}
