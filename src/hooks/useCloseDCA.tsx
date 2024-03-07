import { CloseDCAParams, DCA, Network } from "@jup-ag/dca-sdk";
import { useDCAStore } from "../store";
import { Connection, Keypair, sendAndConfirmTransaction } from "@solana/web3.js";

export default async function useCloseDCA() {

    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const dca = new DCA(connection, Network.MAINNET);
    const userPayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.USER_PRIVATE_KEY as string)));
    const { user, dcaPubKey } = useDCAStore();
    
    const params: CloseDCAParams = {
        user: user,
        dca: dcaPubKey,
    };

    const { tx } = await dca.closeDCA(params);

    const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

    console.log('Close DCA: ', { txid });

    return txid;
}