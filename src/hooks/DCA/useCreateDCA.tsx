import { CreateDCAParamsV2 } from "@jup-ag/dca-sdk";
import {
  Keypair,
  NONCE_ACCOUNT_LENGTH,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { useDCAStore } from "../../store";
import { connection, dca } from "../../utils/connection";
import useWalletStore from "../../store/wallet";
import { getSimulationUnits } from "../../utils/calculateGas";
import getSeconds from "@/src/utils/getSeconds";
import { DCABuyTimings } from "@/src/types/DCA";
import calculateDecimals from "@/src/utils/decimalsCalculator";
import bs58 from "bs58";

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
    sellTokenData
  } = useDCAStore();
  async function createDCA() {

    const userPayer = Keypair.fromSecretKey(
      bs58.decode(currentWallet?.secretKey as string)
    );
    const pubKey = new PublicKey(
      currentWallet?.publicKey as string
    );

    let nonceAccount = Keypair.generate();
    console.log(`nonce account: ${nonceAccount.publicKey.toBase58()}`);

    const params: CreateDCAParamsV2 = {
      payer: pubKey,
      user: pubKey,
      inAmount: BigInt(Number(calculateDecimals(Number(sellTokenData?.decimal), Number(inAmount)))),
      // inAmountPerCycle: BigInt(Number(calculateDecimals(Number(sellTokenData?.decimal), Number(inAmountPerCycle)))),
      cycleSecondsApart: BigInt(
        getSeconds(Number(cycleSecondsApart), DCABuyTimings.MINUTE)
      ) as bigint,
      inAmountPerCycle: BigInt(5_00_000), // buy using 1 USDC each day
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

    try {
      const latestBlockhash = await connection.getLatestBlockhash();
      const transaction = tx;
      transaction.add(
        // create nonce account
        SystemProgram.createAccount({
          fromPubkey: pubKey,
          newAccountPubkey: nonceAccount.publicKey,
          lamports: await connection.getMinimumBalanceForRentExemption(
            NONCE_ACCOUNT_LENGTH
          ),
          space: NONCE_ACCOUNT_LENGTH,
          programId: SystemProgram.programId,
        }),
        // init nonce account
        SystemProgram.nonceInitialize({
          noncePubkey: nonceAccount.publicKey, // nonce account pubkey
          authorizedPubkey: pubKey, // nonce account authority (for advance and close)
        })
      )
      console.log("SOlana's blockHeight: ", latestBlockhash.lastValidBlockHeight);
      transaction.recentBlockhash = latestBlockhash.blockhash;
      transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
      const txid = await sendAndConfirmTransaction(connection, transaction, [userPayer, nonceAccount]);
      console.log("Created DCA: ", { txid });

    } catch (error) {
      console.log("Error creating DCA: ", error);
    }

    return dcaPubKey;
    // return { tx, dcaPubKey, gasFees };
  }

  async function executeDCA(tx: Transaction, dcaPubKey: PublicKey) {

    const latestBlockhash = await connection.getLatestBlockhash();

    const userPayer = Keypair.fromSecretKey(
      bs58.decode(currentWallet?.secretKey as string)
    );

    const transaction = tx;

    transaction.recentBlockhash = latestBlockhash.blockhash;
    transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
    const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

    console.log("Create DCA: ", { txid });

    return dcaPubKey;
  }

  return { createDCA, executeDCA };
}
