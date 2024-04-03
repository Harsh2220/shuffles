import { CreateDCAParamsV2 } from "@jup-ag/dca-sdk";
import {
  Keypair,
  NONCE_ACCOUNT_LENGTH,
  PublicKey,
  SystemProgram,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { useDCAStore } from "../../store/dca";
import { connection, dca } from "../../utils/connection";
import useWalletStore from "../../store/wallet";
import { getSimulationUnits } from "../../utils/calculateGas";
import getSeconds from "@/src/utils/getSeconds";
import { DCABuyTimings } from "@/src/types/DCA";
import bs58 from "bs58";

export default function useCreateDCA() {
  const { currentWallet } = useWalletStore();

  const userPayer = Keypair.fromSecretKey(
    bs58.decode(currentWallet?.secretKey as string)
  );

  const pubKey = new PublicKey(currentWallet?.publicKey as string);

  let nonceAccount = Keypair.generate();
  const {
    inAmount,
    inAmountPerCycle,
    cycleSecondsApart,
    inputMint,
    outputMint,
    minOutAmountPerCycle,
    maxOutAmountPerCycle,
    startAt,
    sellTokenData,
    tx,
    dcaPubKey,
    setTx,
    setDCA,
    setGasFees,
  } = useDCAStore();
  async function createDCA() {
    const params: CreateDCAParamsV2 = {
      payer: pubKey,
      user: pubKey,
      inAmount: BigInt(
        Number(inAmount) * Math.pow(10, sellTokenData?.decimal!)
      ),
      cycleSecondsApart: BigInt(
        getSeconds(Number(cycleSecondsApart), DCABuyTimings.MINUTE)
      ),
      inAmountPerCycle: BigInt(
        (Number(inAmount) * Math.pow(10, sellTokenData?.decimal!)) /
          Number(inAmountPerCycle)
      ),
      inputMint: inputMint as PublicKey,
      outputMint: outputMint as PublicKey,
      minOutAmountPerCycle: minOutAmountPerCycle as bigint,
      maxOutAmountPerCycle: maxOutAmountPerCycle as bigint,
      startAt: startAt as bigint,
    };
    console.log("Create DCA Params: ", params);
    const { tx, dcaPubKey } = await dca.createDcaV2(params);
    const simulate =
      (await getSimulationUnits(connection, tx.instructions, pubKey, [])) ?? 0;
    const gasFees = simulate / 1000000000;
    setTx(tx);
    setDCA(dcaPubKey);
    setGasFees(gasFees);

    return { tx, dcaPubKey, gasFees };
  }

  async function executeDCA() {
    console.log("Execute DCA: ", dcaPubKey);
    try {
      const latestBlockhash = await connection.getLatestBlockhash();

      tx!.recentBlockhash = latestBlockhash.blockhash;
      tx!.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
      tx?.add(
        SystemProgram.createAccount({
          fromPubkey: pubKey,
          newAccountPubkey: nonceAccount.publicKey,
          lamports: await connection.getMinimumBalanceForRentExemption(
            NONCE_ACCOUNT_LENGTH
          ),
          space: NONCE_ACCOUNT_LENGTH,
          programId: SystemProgram.programId,
        }),
        SystemProgram.nonceInitialize({
          noncePubkey: nonceAccount.publicKey,
          authorizedPubkey: pubKey,
        })
      );

      const txid = await sendAndConfirmTransaction(connection, tx!, [
        userPayer,
        nonceAccount,
      ]);

      console.log("Create DCA: ", { txid });

      return dcaPubKey;
    } catch (error) {
      console.log("Error executing DCA: ", error);
    }
  }

  return { createDCA, executeDCA };
}
