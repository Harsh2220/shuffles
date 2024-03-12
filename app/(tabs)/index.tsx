import Button from "@/src/components/UI/Button";
import { Connection, PublicKey } from "@solana/web3.js";
import {
  ChainAddress,
  TokenId,
  Wormhole,
} from "@wormhole-foundation/connect-sdk";
import { EvmPlatform } from "@wormhole-foundation/connect-sdk-evm";
import { SolanaPlatform } from "@wormhole-foundation/connect-sdk-solana";
import React from "react";

export default function Home() {
  async function handle() {
    const connection = new Connection("https://api.testnet.solana.com");
    let balance = await connection.getBalance(
      new PublicKey("9N6ci3qpVxCm5Qmt1H1Pqid2KumUxFJZxpSAVyMMMBT8")
    );

    console.log(balance);

    const wh = new Wormhole("Testnet", [EvmPlatform, SolanaPlatform]);

    const sourceToken: TokenId = Wormhole.tokenId(
      "Solana",
      "So11111111111111111111111111111111111111112"
    );

    const sAddress: ChainAddress = Wormhole.chainAddress(
      "Solana",
      "9N6ci3qpVxCm5Qmt1H1Pqid2KumUxFJZxpSAVyMMMBT8"
    );
    const rAddress: ChainAddress = Wormhole.chainAddress(
      "Ethereum",
      "0xe19ca46C9F081A7B996331a36b0C9563977FfB70"
    );

    const xfer = await wh.tokenTransfer(
      sourceToken,
      BigInt(1),
      sAddress,
      rAddress,
      true
    );

    console.log("xfer", xfer);

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
  }

  return (
    <Button
      onPress={() => {
        try {
          handle();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      Hello
    </Button>
  );
}
