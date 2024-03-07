import { DCA, Network, WithdrawParams } from "@jup-ag/dca-sdk";
import { useDCAStore } from "../store";
import { Connection, Keypair, sendAndConfirmTransaction } from "@solana/web3.js";

export default async function useWithdrawDCA() {

    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const dca = new DCA(connection, Network.MAINNET);
    const userPayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.USER_PRIVATE_KEY as string)));
    const { inputMint, user, dcaPubKey, withDrawAmount } = useDCAStore();
    console.log({ inputMint, user, dcaPubKey, withDrawAmount });

    const params: WithdrawParams = {
        user: user,
        dca: dcaPubKey,
        inputMint: inputMint,
        withdrawInAmount: withDrawAmount as bigint,
    };

    const { tx } = await dca.withdraw(params);

    const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

    console.log('Withdraw: ', { txid });

    return txid;
}