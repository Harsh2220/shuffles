import { Keypair, sendAndConfirmTransaction } from "@solana/web3.js";
import { useLimitOrderStore } from "../../store";
import { BN } from "@coral-xyz/anchor";
import { connection, limitOrder } from "../../utils/connection";

export default async function useCreateLimitOrder() {
    async function createLimitOrder() {
        const { inputMint, outputMint, inAmount, outAmount, owner, setOrder } = useLimitOrderStore();
        const base = Keypair.generate();
        const userPayer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.USER_PRIVATE_KEY as string)));

        const { tx, orderPubKey } = await limitOrder.createOrder({
            owner: owner,
            inAmount: new BN(inAmount),
            outAmount: new BN(outAmount),
            inputMint: inputMint,
            outputMint: outputMint,
            expiredAt: null, // new BN(new Date().valueOf() / 1000)
            base: base.publicKey,
        });
        setOrder(orderPubKey);
        await sendAndConfirmTransaction(connection, tx, [userPayer, base]);
    }
    return { createLimitOrder };
}