import { CloseDCAParams } from "@jup-ag/dca-sdk";
import { useDCAStore } from "../../store";
import { Keypair, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";
import { connection, dca } from "../../utils/connection";

export default function useCloseDCA() {

    async function closeDCA() {
        const userPayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.USER_PRIVATE_KEY as string)));
        const { user, dcaPubKey } = useDCAStore();

        const params: CloseDCAParams = {
            user: user as PublicKey,
            dca: dcaPubKey as PublicKey,
        };

        const { tx } = await dca.closeDCA(params);

        const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

        console.log('Close DCA: ', { txid });

        return txid;
    }

    return { closeDCA };
}