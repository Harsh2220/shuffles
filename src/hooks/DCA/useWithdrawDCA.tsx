import { WithdrawParams } from "@jup-ag/dca-sdk";
import { useDCAStore } from "../../store";
import { Keypair, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";
import { connection, dca } from "../../utils/connection";

export default function useWithdrawDCA() {

    async function withdrawDCA() {
        const userPayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.USER_PRIVATE_KEY as string)));
        const { inputMint, user, dcaPubKey, withDrawAmount } = useDCAStore();

        const params: WithdrawParams = {
            user: user as PublicKey,
            dca: dcaPubKey as PublicKey,
            inputMint: inputMint as PublicKey,
            withdrawInAmount: withDrawAmount as bigint,
        };

        const { tx } = await dca.withdraw(params);

        const txid = await sendAndConfirmTransaction(connection, tx, [userPayer]);

        console.log('Withdraw: ', { txid });

        return txid;
    }

    return { withdrawDCA };
}