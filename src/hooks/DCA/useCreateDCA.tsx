import { CreateDCAParamsV2 } from "@jup-ag/dca-sdk";
import { Keypair, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { useDCAStore } from "../../store";
import { connection, dca } from "../../utils/connection";
import useWalletStore from "../../store/wallet";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { getSimulationUnits } from "../../utils/calculateGas";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import getSeconds from "@/src/utils/getSeconds";
import { DCABuyTimings } from "@/src/types/DCA";
import React from "react";

export default function useCreateDCA() {

  const { currentWallet } = useWalletStore();
  const {
    inAmount,
    inAmountPerCycle,
    cycleSecondsApart,
    inputMint,
    outputMint,
    minOutAmountPerCycle,
    maxOutAmountPerCycle,
    startAt,
  } = useDCAStore();

   async function createDCA() {
    const pubKey = new PublicKey(currentWallet?.publicKey as string);
    const params: CreateDCAParamsV2 = {
      payer: pubKey,
      user: pubKey,
      inAmount: BigInt(Number(inAmount) * 1000000),
      inAmountPerCycle: BigInt(Number(inAmountPerCycle) * 100000),
      cycleSecondsApart: BigInt(getSeconds(Number(cycleSecondsApart), DCABuyTimings.MINUTE)) as bigint,
      inputMint: inputMint as PublicKey,
      outputMint: outputMint as PublicKey,
      minOutAmountPerCycle: minOutAmountPerCycle as bigint,
      maxOutAmountPerCycle: maxOutAmountPerCycle as bigint,
      startAt: startAt as bigint,
    };
    console.log("Create DCA Params: ", params);
    const { tx, dcaPubKey } = await dca.createDcaV2(params);
    console.log("Create DCA TX: ", tx.instructions);
    const simulate = await getSimulationUnits(connection, tx.instructions, pubKey, []) ?? 0;
    const gasFees = (simulate) / 1000000000;
    return { tx, dcaPubKey, gasFees };
  }

  async function executeDCA(tx: Transaction, dcaPubKey: PublicKey) {
    const userPayer = Keypair.fromSecretKey(
      bs58.decode(currentWallet?.secretKey as string)
    );
    const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

    console.log("Create DCA: ", { txid });

    return dcaPubKey;
  }

  return { createDCA, executeDCA };
}
