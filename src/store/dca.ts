import { PublicKey, Transaction } from "@solana/web3.js";
import { create } from "zustand";
import { IToken, JupTokens } from "../types/wallet";

interface IDCAStore {
    inAmount: string;
    inAmountPerCycle: string;
    cycleSecondsApart: string;
    inputMint: PublicKey | null;
    outputMint: PublicKey | null;
    minOutAmountPerCycle: BigInt | null;
    maxOutAmountPerCycle: BigInt | null;
    startAt: BigInt | null;
    userInTokenAccount: PublicKey | null;
    dcaPubKey: PublicKey | null;
    withDrawAmount: BigInt;
    buyTokenData: JupTokens | null;
    sellTokenData: IToken | null;
    gasFess: number;
    tx: Transaction | null;
    txHash: string | null;
    setInAmount: (inAmount: string) => void;
    setInAmountPerCycle: (inAmountPerCycle: string) => void;
    setCycleSecondsApart: (cycleSecondsApart: string) => void;
    setInputMint: (inputMint: PublicKey) => void;
    setOutputMint: (outputMint: PublicKey) => void;
    setMinOutAmountPerCycle: (minOutAmountPerCycle: BigInt) => void;
    setMaxOutAmountPerCycle: (maxOutAmountPerCycle: BigInt) => void;
    setStartAt: (startAt: BigInt) => void;
    setUserInTokenAccount: (
        Account: PublicKey) => void;
    setDCA: (dcaPubKey: PublicKey) => void;
    setWithDrawAmount: (withDrawAmount: BigInt) => void;
    setBuyTokenData: (buyTokenData: JupTokens) => void;
    setSellTokenData: (sellTokenData: IToken) => void;
    setGasFees: (gasFess: number) => void;
    setTx: (tx: Transaction) => void;
    setTxHash: (txHash: string) => void;
}

const useDCAStore = create<IDCAStore>((set) => ({
    inAmount: '',
    inAmountPerCycle: '',
    cycleSecondsApart: '',
    inputMint: null,
    outputMint: null,
    minOutAmountPerCycle: null,
    maxOutAmountPerCycle: null,
    startAt: null,
    userInTokenAccount: null,
    dcaPubKey: null,
    withDrawAmount: BigInt(0),
    gasFess: 0,
    tx: null,
    txHash: null,
    buyTokenData: null,
    sellTokenData: null,
    setInAmount: (inAmount) => set({ inAmount }),
    setGasFees: (gasFess) => set({ gasFess }),
    setInAmountPerCycle: (inAmountPerCycle) => set({ inAmountPerCycle }),
    setCycleSecondsApart: (cycleSecondsApart) => set({ cycleSecondsApart }),
    setInputMint: (inputMint) => set({ inputMint }),
    setOutputMint: (outputMint) => set({ outputMint }),
    setMinOutAmountPerCycle: (minOutAmountPerCycle) => set({ minOutAmountPerCycle }),
    setMaxOutAmountPerCycle: (maxOutAmountPerCycle) => set({ maxOutAmountPerCycle }),
    setStartAt: (startAt) => set({ startAt }),
    setUserInTokenAccount: (userInTokenAccount) => set({ userInTokenAccount }),
    setDCA: (dcaPubKey) => set({ dcaPubKey }),
    setWithDrawAmount: (withDrawAmount) => set({ withDrawAmount }),
    setBuyTokenData: (buyTokenData) => set({ buyTokenData }),
    setSellTokenData: (sellTokenData) => set({ sellTokenData }),
    setTx: (tx) => set({ tx }),
    setTxHash: (txHash) => set({ txHash }),
}));

export { useDCAStore };