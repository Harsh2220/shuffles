import Button from "@/src/components/UI/Button";
import { Connection, PublicKey } from "@solana/web3.js";
import {
  ChainAddress,
  TokenId,
  Wormhole,
} from "@wormhole-foundation/connect-sdk";
import { EvmPlatform } from "@wormhole-foundation/connect-sdk-evm";
import { SolanaPlatform, getSolanaSignAndSendSigner, getSolanaSigner } from "@wormhole-foundation/connect-sdk-solana";
import "@wormhole-foundation/connect-sdk-solana-tokenbridge";
import "@wormhole-foundation/connect-sdk-evm-tokenbridge";
import React from "react";

export default function Home() {
  async function handle() {
    try {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const balance = await connection.getBalance(
        new PublicKey("HkS4TZQbbAvgGUVdvJV5hUaXg2T3cecjTCRou6WsZfMN")
      );

      console.log(balance);

      const wh = new Wormhole("Mainnet", [SolanaPlatform, EvmPlatform]);

      const srcChain = wh.getChain("Solana");
      const destChain = wh.getChain("Ethereum");
      const sourceToken: TokenId = Wormhole.tokenId(
        "Solana",
        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
      );

      await srcChain.getTokenBridge();

      await destChain.getTokenBridge();

      const sAddress: ChainAddress = Wormhole.chainAddress(
        "Solana",
        "HkS4TZQbbAvgGUVdvJV5hUaXg2T3cecjTCRou6WsZfMN"
      );

      const rAddress: ChainAddress = Wormhole.chainAddress(
        "Polygon",
        "0xe19ca46C9F081A7B996331a36b0C9563977FfB70"
      );

      // const usdcXfer = await wh.circleTransfer(
      //   1_000_000n, // amount in base units (1 USDC)
      //   sAddress, // Sender address on source chain
      //   rAddress, // Recipient address on destination chain
      //   true // Automatic transfer
      // );

      // console.log(usdcXfer);

      const xfer = await wh.tokenTransfer(
        sourceToken,
        1_00n,
        sAddress,
        rAddress,
        true
      );

      console.log("xfer", xfer);

      const signer = await getSolanaSignAndSendSigner(connection, "3HqBfHTw6szng8bVZtEQYec5cVemR2CBhuevnaJp9iZTK3CiJFEPBpXo62qUuVS9ue8oys6Vdhu9zdZdckNHFvBn");
      console.log("Starting transfer", signer);
      const srcTxids = await xfer.initiateTransfer(signer);
      console.log(`Started transfer: `, srcTxids);

    } catch (error) {
      console.log(error);
    }
  }

  return <Button onPress={handle}>Hello</Button>;
}