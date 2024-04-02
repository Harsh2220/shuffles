import BridgeFrom from "@/src/components/Bridge/BridgeFrom";
import BridgeTo from "@/src/components/Bridge/BridgeTo";
import Receiver from "@/src/components/Bridge/Receiver";
import BridgeConfirmSheet from "@/src/components/Sheets/BridgeConfirmSheet";
import SwapDivider from "@/src/components/SwapDivider";
import Button from "@/src/components/UI/Button";
import Container from "@/src/components/UI/Container";
import Sheet from "@/src/components/UI/Sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import {
  ChainAddress,
  TokenId,
  Wormhole,
  routes,
} from "@wormhole-foundation/connect-sdk";
import { EvmPlatform } from "@wormhole-foundation/connect-sdk-evm";
import "@wormhole-foundation/connect-sdk-evm-tokenbridge";
import {
  SolanaPlatform,
  getSolanaSigner,
} from "@wormhole-foundation/connect-sdk-solana";
import "@wormhole-foundation/connect-sdk-solana-tokenbridge";
import React, { useRef } from "react";
import { View } from "react-native";

export default function Bridge() {
  const confirmBridgeRef = useRef<BottomSheetModal>(null);

  async function handle() {
    try {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const balance = await connection.getBalance(
        new PublicKey("HkS4TZQbbAvgGUVdvJV5hUaXg2T3cecjTCRou6WsZfMN")
      );

      console.log(balance);

      const wh = new Wormhole("Mainnet", [SolanaPlatform, EvmPlatform]);
      const resolver = wh.resolver([
        routes.AutomaticTokenBridgeRoute,
      ]);

      const srcChain = wh.getChain("Solana");
      const destChain = wh.getChain("Polygon");

      const tokens = await resolver.supportedSourceTokens(srcChain);

      console.log("tokens", tokens.length);

      for (let index = 0; index < tokens.length; index++) {
       console.log("token", tokens[index]); 
      }

      const sourceToken: TokenId = Wormhole.tokenId(
        "Solana",
        "A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM"
      );

      await srcChain.getTokenBridge();

      await destChain.getTokenBridge();

      const sAddress: ChainAddress = Wormhole.chainAddress(
        "Solana",
        "HkS4TZQbbAvgGUVdvJV5hUaXg2T3cecjTCRou6WsZfMN"
      );

      const rAddress: ChainAddress = Wormhole.chainAddress(
        "Polygon",
        "0xC0FC7059A4e545801355eB7D19776fE3D7A20599"
      );

      const xfer = await wh.tokenTransfer(
        sourceToken,
        1_000_000n,
        sAddress,
        rAddress,
        true
      )

      console.log("xfer", xfer);

      const signer = await getSolanaSigner(
        connection,
        ""
      );

      const srcTxids = await xfer.initiateTransfer(signer);
      console.log(`Started transfer: `, srcTxids);
     
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            gap: 16,
          }}
        >
          <BridgeFrom />
          <SwapDivider />
          <Receiver />
          <BridgeTo />
        </View>
        <Button
          onPress={() => {
            handle();
            // confirmBridgeRef?.current?.present();
          }}
          style={{
            marginTop: 16,
          }}
        >
          Bridge
        </Button>
      </View>
      <Sheet
        style={{
          margin: 16,
        }}
        ref={confirmBridgeRef}
        snapPoints={[340]}
        detached={true}
        bottomInset={50}
      >
        <BridgeConfirmSheet />
      </Sheet>
    </Container>
  );
}
