import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import ApprovedDCACard from "@/src/components/cards/activities/ApprovedDCACard";
import ReceivedCard from "@/src/components/cards/activities/ReceivedCard";
import SentCard from "@/src/components/cards/activities/SentCard";
import SwappedCard from "@/src/components/cards/activities/SwappedCard";
import React from "react";
import { View } from "react-native";

export default function Activity() {
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
        <ApprovedDCACard />
        <SwappedCard />
        <SentCard />
        <ReceivedCard />
      </View>
    </Container>
  );
}
