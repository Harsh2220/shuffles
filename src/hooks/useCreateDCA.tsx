import { CreateDCAParamsV2, DCA, Network } from "@jup-ag/dca-sdk";
import { Connection, Keypair, sendAndConfirmTransaction } from "@solana/web3.js";
import { useDCAStore } from "../store";

export default async function useCreateDCA() {
    const connection = new Connection('https://api.mainnet-beta.solana.com');

    const dca = new DCA(connection, Network.MAINNET);

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