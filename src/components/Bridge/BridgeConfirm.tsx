import { black, white } from "@/src/constants/color";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../UI/Button";
import { Heading } from "../UI/Heading";
import { Paragraph } from "../UI/Paragraph";
import useBridgeStore from "@/src/store/bridge";
import formatAddress from "@/src/utils/formatAddress";
import useBridge from "@/src/hooks/Bridge/useBridge";
import useTokenPrice from "@/src/hooks/useTokenPrice";

export default function BridgeConfirm() {
  const { sellToken, amount, dstAmount, chain, receiver } = useBridgeStore();
  const { dismiss } = useBottomSheetModal();
  const { bridgeTokens } = useBridge();
  const { getTokenPrice } = useTokenPrice();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [price, setPrice] = useState(0);

  const DATA = [
    {
      title: "You are selling",
      value: `${amount} ${sellToken?.symbol}`,
    },
    {
      title: "You will receive",
      value: `~ ${dstAmount} ${sellToken?.symbol}`,
    },
    {
      title: "Destination Network",
      value: chain?.name,
    },
    {
      title: "Receive on",
      value: formatAddress(receiver),
    },
    // {
    //   title: "Estimated gas fees",
    //   value: gasFess,
    // },
  ];

  async function handleBridge() {
    try {
      setIsLoading(true);
      await bridgeTokens();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePrice() {
    try {
      if (!sellToken?.address) return;
      const tokenPrice = await getTokenPrice(sellToken?.address);
      setPrice(tokenPrice);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlePrice();
  }, []);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.transactionPreview}>
        <Heading style={styles.transactionAmount}>Transaction Preview</Heading>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 16,
          }}
        >
          <View>
            <Heading style={styles.assetName}>
              -{amount} {sellToken?.symbol}
            </Heading>
            <Paragraph
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: white[200],
              }}
            >
              ${(price * Number(amount)).toFixed(2)}
            </Paragraph>
          </View>
          <Image
            source={{
              uri: sellToken?.image,
            }}
            style={{ width: 40, height: 40, borderRadius: 25 }}
          />
        </View>
        <View
          style={{
            borderRadius: 16,
            backgroundColor: "#EDEFF2",
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: "100%",
            marginTop: 16,
            paddingBottom: 18,
          }}
        >
          <Heading
            style={{
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Fees Preview
          </Heading>
          <View
            style={{
              marginTop: 14,
              gap: 8,
            }}
          >
            {DATA.map((el, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Paragraph
                  style={{
                    color: black[200],
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  {el.title}
                </Paragraph>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: black[800],
                  }}
                >
                  {el.value}
                </Heading>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 16,
          }}
        >
          {!isLoading && (
            <Button
              style={{
                backgroundColor: "#EDEFF2",
                borderColor: white[800],
                width: "48%",
              }}
              textStyle={{
                color: black[800],
              }}
              size="small"
              onPress={() => {
                dismiss();
              }}
            >
              Cancel
            </Button>
          )}
          <Button
            isLoading={isLoading}
            style={{
              width: isLoading ? "100%" : "48%",
            }}
            size="small"
            onPress={handleBridge}
          >
            Confirm
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  transactionPreview: {
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
  },
  transactionAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    marginTop: 16,
  },
  assetName: {
    fontSize: 20,
    fontWeight: "700",
  },
  assetBalance: {
    fontWeight: "600",
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    width: "100%",
    marginVertical: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
  },
});
