import Button from "@/src/components/UI/Button";
import { Connection, PublicKey } from "@solana/web3.js";
import {
  ChainAddress,
  TokenId,
  Wormhole,
} from "@wormhole-foundation/connect-sdk";
import { EvmPlatform } from "@wormhole-foundation/connect-sdk-evm";
import {
  SolanaPlatform,
  getSolanaSignAndSendSigner,
} from "@wormhole-foundation/connect-sdk-solana";
import "@wormhole-foundation/connect-sdk-solana-tokenbridge";
import React from "react";

export default function Home() {
  async function handle() {
    try {
      // const connection = new Connection("https://api-beta.solana.com");
      // const balance = await connection.getBalance(
      //   new PublicKey("9N6ci3qpVxCm5Qmt1H1Pqid2KumUxFJZxpSAVyMMMBT8")
      // );

      // console.log(balance);

      const wh = new Wormhole("Mainnet", [EvmPlatform, SolanaPlatform]);

      const srcChain = wh.getChain("Solana");

      const b = await srcChain.getTokenBridge();

      const sourceToken: TokenId = Wormhole.tokenId(
        "Solana",
        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
      );

      console.log(sourceToken);

      const sAddress: ChainAddress = Wormhole.chainAddress(
        "Solana",
        "Ad3SGvr7fzAHGLC81nooyG5BaYxsACFxM28kDpXZe4aa"
      );
      const rAddress: ChainAddress = Wormhole.chainAddress(
        "Polygon",
        "0xe19ca46C9F081A7B996331a36b0C9563977FfB70"
      );

      console.log("hererere");

      // Format it for base units

      // Create a TokenTransfer object, allowing us to shepherd the transfer through the process and get updates on its status
      const manualXfer = await wh.tokenTransfer(
        sourceToken, // TokenId of the token to transfer or 'native'
        1_000_000n, // Amount in base units
        sAddress, // Sender address on source chain
        rAddress, // Recipient address on destination chain
        false // No Automatic transfer
      );

      // const usdcXfer = await wh.circleTransfer(
      //   1_000_000n, // amount in base units (1 USDC)
      //   sAddress, // Sender address on source chain
      //   rAddress, // Recipient address on destination chain
      //   false // Automatic transfer
      // );

      console.log(manualXfer);

      // const srcTxids = await manualXfer.initiateTransfer(src.signer);

      // const xfer = await wh.tokenTransfer(
      //   sourceToken,
      //   BigInt(1),
      //   sAddress,
      //   rAddress,
      //   false
      // );

      // console.log("xfer", xfer);

      // const quote = await TokenTransfer.quoteTransfer(
      //   wh,
      //   wh.getChain("Solana"),
      //   wh.getChain("Ethereum"),
      //   xfer.transfer
      // );

      // console.log(quote, "quote");

      // if (xfer.transfer.automatic && quote.destinationToken.amount < 0)
      //   throw "The amount requested is too low to cover the fee and any native gas requested.";

      // const se = bs58.decode(
      //   "24V1WcYofTEXdQz34zNYAY8ygeEfQrU3cTWLyi3abfLcUd2EwqZtRniRoR7j9v5PR76TjTVKcbaG3QM6LXwdK1wg"
      // );

      // const kp = solanaWeb3.Keypair.fromSecretKey(se);

      // const s = new SolanaSigner(
      //   "Solana",
      //   kp,
      //   await wh.getChain("Solana").getRpc()
      // );

      // console.log("Starting transfer");
      // const srcTxids = await xfer.initiateTransfer(s);
      // console.log(`Started transfer: `, srcTxids);

      // return xfer;

      // console.log("Getting Attestation");
      // const attestIds = await xfer.fetchAttestation(60_000);
      // console.log(`Got Attestation: `, attestIds);

      // // 3) Redeem the VAA on the dest chain
      // console.log("Completing Transfer");
      // const destTxids = await xfer.completeTransfer(route.destination.signer);
      // console.log(`Completed Transfer: `, destTxids);
    } catch (error) {
      console.log(error);
    }
  }

  return <Button onPress={handle}>Hello</Button>;
}
