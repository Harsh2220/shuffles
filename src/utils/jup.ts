import { CreateDCAParamsV2, DCA, Network } from "@jup-ag/dca-sdk";
import { Connection, Keypair, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";
import base58 from "bs58";

const connection = new Connection('https://api.mainnet-beta.solana.com');

const dca = new DCA(connection, Network.MAINNET);
const user = Keypair.fromSecretKey(base58.decode('')); 

export default async function createDCssA(
  pubkey: PublicKey,
  inAmount: BigInt,
  inAmountPerCycle: BigInt,
  cycleSecondsApart: BigInt,
  inputMint: PublicKey,
  outputMint: PublicKey,
) {
  const params: CreateDCAParamsV2 = {
    payer: pubkey,
    user: pubkey,
    inAmount: inAmount as bigint,
    inAmountPerCycle: inAmountPerCycle as bigint,
    cycleSecondsApart: cycleSecondsApart as bigint,
    inputMint: inputMint,
    outputMint: outputMint,
    minOutAmountPerCycle: null,
    maxOutAmountPerCycle: null,
    startAt: null,
    // userInTokenAccount, // optional: if the inputMint token is not in an Associated Token Account but some other token account, pass in the PublicKey of the token account, otherwise, leave it undefined
  };
  // console.log('Params: ', params);
  const { tx, dcaPubKey } = await dca.createDcaV2(params);
  // console.log('Create DCA: ', { tx, dcaPubKey });

  try {
    console.log('Sending transaction...');
    const txid = await sendAndConfirmTransaction(connection, tx, [user]);
    console.log('Create DCA: ', { txid });

  } catch (error) {
    console.error('Error: ', error);
  }

  return dcaPubKey;
}