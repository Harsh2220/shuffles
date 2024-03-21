import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import { Heading } from "@/src/components/UI/Heading";
import TokenCard from "@/src/components/cards/TokenCard";
import { black } from "@/src/constants/color";
import useWalletData from "@/src/hooks/useWalletData";
import useWalletStore from "@/src/store/wallet";
import { IToken } from "@/src/types/wallet";
import React from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";

const renderItem = ({ item }: { item: IToken }) => <TokenCard token={item} />;

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const { handleTokens } = useWalletData();
  const { balance, tokens } = useWalletStore();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    try {
      handleTokens();
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const _RefreshControl = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      progressBackgroundColor={"black"}
    />
  );

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.walletSummary}>
          <Heading style={styles.balance}>${balance}</Heading>
          <View style={styles.buttonContainer}>
            <Button onPress={() => {}} style={styles.button}>
              withdraw
            </Button>
            <Button onPress={() => {}} style={styles.button}>
              Deposit
            </Button>
          </View>
          <Heading style={styles.assetsHeading}>My Assets</Heading>
        </View>
        <FlatList
          renderItem={renderItem}
          data={tokens}
          refreshControl={_RefreshControl}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 12,
            marginTop: 16,
          }}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  walletSummary: {
    alignItems: "center",
    justifyContent: "center",
  },
  balanceTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 45,
    fontWeight: "600",
  },
  change: {
    fontSize: 16,
    color: "green",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 50,
    paddingVertical: 14,
    backgroundColor: black[800],
  },
  buttonText: {
    color: "white",
  },
  assetBalance: {
    fontWeight: "500",
    fontSize: 16,
  },
  assetChange: {
    fontSize: 14,
    color: "black",
  },
  assetsHeading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
});
