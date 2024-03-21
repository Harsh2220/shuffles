import { CreateDCAParamsV2, DCA, Network } from "@jup-ag/dca-sdk";
import { Keypair, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";
import { useDCAStore } from "../../store";
import  useWalletStore  from "../../store/wallet";
import  bs58  from "bs58";

export default function useCreateDCA() {
  const { currentWallet } = useWalletStore();
  const { payer, user, inAmount, inAmountPerCycle, cycleSecondsApart, inputMint, outputMint, minOutAmountPerCycle, maxOutAmountPerCycle, startAt, userInTokenAccount } = useDCAStore();

  async function createDCA() {

    const userPayer = Keypair.fromSecretKey(bs58.decode(currentWallet?.secretKey as string));

    const params: CreateDCAParamsV2 = {
      payer: new PublicKey(currentWallet?.publicKey!),
      user: new PublicKey(currentWallet?.publicKey!),
      inAmount: BigInt(inAmount),
      inAmountPerCycle: BigInt(inAmountPerCycle), 
      cycleSecondsApart: BigInt(cycleSecondsApart), 
      inputMint: inputMint as PublicKey, 
      outputMint: outputMint as PublicKey, 
      minOutAmountPerCycle: minOutAmountPerCycle as bigint, 
      maxOutAmountPerCycle: maxOutAmountPerCycle as bigint, 
      startAt: startAt as bigint, 
      userInTokenAccount : userInTokenAccount as PublicKey, 
    };

    console.log('Create DCA: ', { params });

    // const { tx, dcaPubKey } = await dca.createDcaV2(params);
    // console.log('Create DCA: ', { tx, dcaPubKey });
    // const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

    // console.log('Create DCA: ', { txid });

    // return dcaPubKey;
  }

  return { createDCA };
}