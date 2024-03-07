import { CreateDCAParamsV2 } from "@jup-ag/dca-sdk";
import { Keypair, sendAndConfirmTransaction } from "@solana/web3.js";
import { useDCAStore } from "../../store";
import { connection, dca } from "../../utils/connection";

export default async function useCreateDCA() {

  async function createDCA() {
    const { payer, user, inAmount, inAmountPerCycle, cycleSecondsApart, inputMint, outputMint, minOutAmountPerCycle, maxOutAmountPerCycle, startAt, userInTokenAccount } = useDCAStore();

    const userPayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.USER_PRIVATE_KEY as string)));

    const params: CreateDCAParamsV2 = {
      payer: payer,
      user: user,
      inAmount: inAmount as bigint,
      inAmountPerCycle: inAmountPerCycle as bigint, // buy using 1 USDC each day
      cycleSecondsApart: cycleSecondsApart as bigint, // 1 day between each order -> 60 * 60 * 24
      inputMint: inputMint, // sell
      outputMint: outputMint, // buy
      minOutAmountPerCycle: minOutAmountPerCycle as bigint,  // effectively allows for a min price. refer to Integration doc
      maxOutAmountPerCycle: maxOutAmountPerCycle as bigint, // effectively allows for a max price. refer to Integration doc
      startAt: startAt as bigint, // unix timestamp in seconds
      userInTokenAccount, // optional: if the inputMint token is not in an Associated Token Account but some other token account, pass in the PublicKey of the token account, otherwise, leave it undefined
    };

    const { tx, dcaPubKey } = await dca.createDcaV2(params);
    const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

    console.log('Create DCA: ', { txid });

    return dcaPubKey;
  }

  return { createDCA };
}