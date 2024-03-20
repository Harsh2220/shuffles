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
import ScannerSheet from "@/src/components/Sheets/ScanneSheet";
import { black, white } from "@/src/constants/color";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  const scannerRef = useRef<BottomSheetModal>(null);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarShowLabel: false,
          headerShadowVisible: false,
          headerTitle: "My wallet",
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
        <Tabs.Screen
          name="dca"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <DCAIcon width={26} height={26} color={black[700]} />
              ) : (
                <DCAOutline width={26} height={26} color={white[200]} />
              ),
          }}
        />
        <Tabs.Screen
          name="limit"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <BarIcon width={26} height={26} color={black[700]} />
              ) : (
                <BarOutline width={26} height={26} color={white[200]} />
              ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Wallet width={26} height={26} color={black[700]} />
              ) : (
                <WalletOutline width={26} height={26} color={white[200]} />
              ),
          }}
        />
        <Tabs.Screen
          name="bridge"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <ExchangeIcon width={26} height={26} color={black[700]} />
              ) : (
                <ExchangeOutline width={26} height={26} color={white[200]} />
              ),
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Clock width={26} height={26} color={black[700]} />
              ) : (
                <ClockOutline width={26} height={26} color={white[200]} />
              ),
          }}
        />
      </Tabs>
      <ScannerSheet ref={scannerRef} />
    </>
  );
}
