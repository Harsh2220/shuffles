import { create } from "zustand";
import { Chain } from "../types/Chain";
import { IToken } from "../types/wallet";

interface IBridge {
    sellToken: null | IToken
    chain: null | Chain;
    amount: string;
    setChain: (chain: Chain) => void
    setSellToken: (sellToken: IToken) => void
    setAmount: (amount: string) => void
}

const useBridgeStore = create<IBridge>((set) => ({
    sellToken: null,
    amount: '',
    chain: null,
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
}));

export default useBridgeStore;