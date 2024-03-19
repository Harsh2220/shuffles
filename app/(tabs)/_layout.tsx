import BarIcon from "@/src/assets/Icons/Bar";
import BarOutline from "@/src/assets/Icons/BarOutline";
import Clock from "@/src/assets/Icons/Clock";
import ClockOutline from "@/src/assets/Icons/ClockOutline";
import DCAIcon from "@/src/assets/Icons/DCAIcon";
import DCAOutline from "@/src/assets/Icons/DCAOutline";
import ExchangeIcon from "@/src/assets/Icons/ExchangeIcon";
import ExchangeOutline from "@/src/assets/Icons/ExchangeOutline";
import Wallet from "@/src/assets/Icons/Wallet";
import WalletOutline from "@/src/assets/Icons/WalletOutline";
import { black, white } from "@/src/constants/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {  
   return (
    <Tabs
      initialRouteName="limit"
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      <Tabs.Screen
        name="dca"
        options={{
          headerTitle: "DCA",
          title: "",
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
          headerTitle: "Limit",
          title: "",
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
          headerTitle: "Home",
          title: "",
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
          title: "",
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
          headerTitle: "Activity",
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Clock width={26} height={26} color={black[700]} />
            ) : (
              <ClockOutline width={26} height={26} color={white[200]} />
            ),
        }}
      />
    </Tabs>
  );
}
