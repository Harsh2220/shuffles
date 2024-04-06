import { create } from "zustand";
import { Chain } from "../types/Chain";
import { IToken } from "../types/wallet";
import { BridgeToken } from "../types/Bridge";

interface IBridge {
    sellToken: null | BridgeToken
    chain: null | Chain;
    amount: string;
    receiver: string;
    dstAmount: null | string;
    txHash: string | null;
    error: boolean,
    setChain: (chain: Chain) => void
    setSellToken: (sellToken: BridgeToken) => void
    setAmount: (amount: string) => void
    setReceiver: (amount: string) => void
    setTxHash: (txHash: string | null) => void
    setError: (error: boolean) => void
    setDstAmount: (dstAmount: string) => void
}

const useBridgeStore = create<IBridge>((set) => ({
    sellToken: null,
    amount: '',
    chain: null,
    receiver: '',
    txHash: null,
    dstAmount: null,
    error: false,
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
    setError: (error) =>
        set({
            error: error,
        }),
    setDstAmount: (dstAmount) =>
        set({
            dstAmount: dstAmount,
        }),
}));

export default useBridgeStore;