import { create } from "zustand";
import { Chain } from "../types/Chain";
import { IToken } from "../types/wallet";
import { BridgeToken } from "../types/Bridge";

interface IBridge {
    sellToken: null | BridgeToken
    chain: null | Chain;
    amount: string;
    receiver: string;
    txHash: string | null;
    setChain: (chain: Chain) => void
    setSellToken: (sellToken: BridgeToken) => void
    setAmount: (amount: string) => void
    setReceiver: (amount: string) => void
    setTxHash: (txHash: string) => void
}

const useBridgeStore = create<IBridge>((set) => ({
    sellToken: null,
    amount: '',
    chain: null,
    receiver: '',
    txHash: null,
    setChain: (chain) =>
        set({
            chain: chain,
        }),
    setSellToken: (sellToken) =>
        set({
            sellToken: sellToken,
        }),
    setAmount: (amount) =>
        set({
            amount: amount,
        }),
    setReceiver: (receiver) =>
        set({
            receiver: receiver,
        }),
    setTxHash: (txHash) =>
        set({
            txHash: txHash,
        }),
}));

export default useBridgeStore;