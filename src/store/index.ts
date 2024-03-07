import { PublicKey } from "@solana/web3.js";
import { create } from "zustand";

interface IDCAStore {
    payer: PublicKey;
    user: PublicKey;
    inAmount: BigInt;
    inAmountPerCycle: BigInt;
    cycleSecondsApart: BigInt;
    inputMint: PublicKey;
    outputMint: PublicKey;
    minOutAmountPerCycle: BigInt | null;
    maxOutAmountPerCycle: BigInt | null;
    startAt: BigInt | null;
    userInTokenAccount: PublicKey;
    dcaPubKey: PublicKey;
    withDrawAmount: BigInt;
}

const useDCAStore = create<IDCAStore>((set) => ({

    payer: new PublicKey(""),
    user: new PublicKey(""),
    inAmount: BigInt(0),
    inAmountPerCycle: BigInt(0),
    cycleSecondsApart: BigInt(0),
    inputMint: new PublicKey(""),
    outputMint: new PublicKey(""),
    minOutAmountPerCycle: null,
    maxOutAmountPerCycle: null,
    startAt: null,
    userInTokenAccount: new PublicKey(""),
    dcaPubKey: new PublicKey(""),
    withDrawAmount: BigInt(0),

    setPayer: (payer: PublicKey) => set({ payer }),
    setUser: (user: PublicKey) => set({ user }),
    setInAmount: (inAmount: BigInt) => set({ inAmount }),
    setInAmountPerCycle: (inAmountPerCycle: BigInt) => set({ inAmountPerCycle }),
    setCycleSecondsApart: (cycleSecondsApart: BigInt) => set({ cycleSecondsApart }),
    setInputMint: (inputMint: PublicKey) => set({ inputMint }),
    setOutputMint: (outputMint: PublicKey) => set({ outputMint }),
    setMinOutAmountPerCycle: (minOutAmountPerCycle: BigInt) => set({ minOutAmountPerCycle }),
    setMaxOutAmountPerCycle: (maxOutAmountPerCycle: BigInt) => set({ maxOutAmountPerCycle }),
    setStartAt: (startAt: BigInt) => set({ startAt }),
    setUserInTokenAccount: (userInTokenAccount: PublicKey) => set({ userInTokenAccount }),
    setDCA: (dcaPubKey: PublicKey) => set({ dcaPubKey }),
    setWithDrawAmount: (withDrawAmount: BigInt) => set({ withDrawAmount }),
}));

export { useDCAStore };