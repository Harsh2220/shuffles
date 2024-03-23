import { CreateDCAParamsV2 } from "@jup-ag/dca-sdk";
import { Keypair, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";
import { useDCAStore } from "../../store";
import { connection, dca } from "../../utils/connection";
import useWalletStore from "../../store/wallet";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";

export default function useCreateDCA() {
  const { currentWallet } = useWalletStore();
  const {
    payer,
    user,
    inAmount,
    inAmountPerCycle,
    cycleSecondsApart,
    inputMint,
    outputMint,
    minOutAmountPerCycle,
    maxOutAmountPerCycle,
    startAt,
    userInTokenAccount,
  } = useDCAStore();

  async function createDCA() {
    const userPayer = Keypair.fromSecretKey(
      bs58.decode(currentWallet?.secretKey as string)
    );

    const params: CreateDCAParamsV2 = {
      payer: currentWallet?.publicKey!,
      user: currentWallet?.publicKey!,
      inAmount: inAmount as bigint,
      inAmountPerCycle: inAmountPerCycle as bigint,
      cycleSecondsApart: cycleSecondsApart as bigint,
      inputMint: inputMint as PublicKey,
      outputMint: outputMint as PublicKey,
      minOutAmountPerCycle: minOutAmountPerCycle as bigint,
      maxOutAmountPerCycle: maxOutAmountPerCycle as bigint,
      startAt: startAt as bigint,
      userInTokenAccount: userInTokenAccount as PublicKey,
    };

    const { tx, dcaPubKey } = await dca.createDcaV2(params);
    const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

    console.log("Create DCA: ", { txid });

    return dcaPubKey;
  }

  return { createDCA };
}
