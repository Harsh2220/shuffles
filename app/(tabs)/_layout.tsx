import BarIcon from "@/src/assets/Icons/Bar";
import BarOutline from "@/src/assets/Icons/BarOutline";
import Clock from "@/src/assets/Icons/Clock";
import ClockOutline from "@/src/assets/Icons/ClockOutline";
import DCAIcon from "@/src/assets/Icons/DCAIcon";
import DCAOutline from "@/src/assets/Icons/DCAOutline";
import ExchangeIcon from "@/src/assets/Icons/ExchangeIcon";
import ExchangeOutline from "@/src/assets/Icons/ExchangeOutline";
import ScanIcon from "@/src/assets/Icons/ScanIcon";
import Wallet from "@/src/assets/Icons/Wallet";
import WalletOutline from "@/src/assets/Icons/WalletOutline";
import ScannerSheet from "@/src/components/Sheets/ScannerSheet";
import Sheet from "@/src/components/UI/Sheet";
import { black, white } from "@/src/constants/color";
import useWalletStore from "@/src/store/wallet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";

const TABS = [
  {
    name: "dca",
    label: "DCA",
    activeIcon: <DCAIcon width={26} height={26} color={black[700]} />,
    inactiveIcon: <DCAOutline width={26} height={26} color={white[200]} />,
  },
  {
    name: "limit",
    label: "Limit",
    activeIcon: <BarIcon width={26} height={26} color={black[700]} />,
    inactiveIcon: <BarOutline width={26} height={26} color={white[200]} />,
  },
  {
    name: "index",
    label: "Index",
    activeIcon: <Wallet width={26} height={26} color={black[700]} />,
    inactiveIcon: <WalletOutline width={26} height={26} color={white[200]} />,
  },
  {
    name: "bridge",
    label: "Bridge",
    activeIcon: <ExchangeIcon width={26} height={26} color={black[700]} />,
    inactiveIcon: <ExchangeOutline width={26} height={26} color={white[200]} />,
  },
  {
    name: "activity",
    label: "Activity",
    activeIcon: <Clock width={26} height={26} color={black[700]} />,
    inactiveIcon: <ClockOutline width={26} height={26} color={white[200]} />,
  },
];

export default function TabLayout() {
  const { currentWallet } = useWalletStore();
  const scannerRef = useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["60%", "90%"], []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarShowLabel: false,
          headerShadowVisible: false,
          headerTitle: currentWallet?.name,
          headerRight: () => (
            <TouchableOpacity
              style={{
                paddingHorizontal: 24,
                paddingVertical: 8,
              }}
              onPress={() => {
                scannerRef.current?.present();
              }}
            >
              <ScanIcon width={20} height={20} color={black[700]} />
            </TouchableOpacity>
          ),
        }}
      >
        {TABS.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? tab.activeIcon : tab.inactiveIcon,
            }}
          />
        ))}
      </Tabs>
      <Sheet ref={scannerRef} snapPoints={snapPoints}>
        <ScannerSheet />
      </Sheet>
    </>
  );
}
