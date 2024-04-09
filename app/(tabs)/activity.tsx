import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import ApprovedDCACard from "@/src/components/cards/activities/ApprovedDCACard";
import SwappedCard from "@/src/components/cards/activities/SwappedCard";
import useWalletStore from "@/src/store/wallet";
import { Activities, SwapActivity } from "@/src/types/Activitiy";
import { getSwapActivity } from "@/src/utils/getSwapActivity";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

export default function Activity() {
  const { currentWallet } = useWalletStore();
  const [activities, setActivities] = useState<SwapActivity[] | null>(null);

  const renderItem = ({ item }: { item: SwapActivity }) => {
    return item.type === Activities.DCA ? (
      <ApprovedDCACard data={item} />
    ) : (
      <SwappedCard data={item} />
    );
  };

  async function handleSwapActivity() {
    if (!currentWallet?.publicKey) return;
    const activity = await getSwapActivity(currentWallet?.publicKey);
    setActivities(activity);
  }

  useEffect(() => {
    handleSwapActivity();
  }, []);

  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <Heading
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginHorizontal: 8,
            marginVertical: 12,
          }}
        >
          Today
        </Heading>
        <FlatList data={activities} renderItem={renderItem} />
      </View>
    </Container>
  );
}
