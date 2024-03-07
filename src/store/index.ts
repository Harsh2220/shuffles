import { PublicKey } from "@solana/web3.js";
import { create } from "zustand";
import { BN } from "@coral-xyz/anchor";

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

    setPayer: (payer: PublicKey) => void;
    setUser: (user: PublicKey) => void;
    setInAmount: (inAmount: BigInt) => void;
    setInAmountPerCycle: (inAmountPerCycle: BigInt) => void;
    setCycleSecondsApart: (cycleSecondsApart: BigInt) => void;
    setInputMint: (inputMint: PublicKey) => void;
    setOutputMint: (outputMint: PublicKey) => void;
    setMinOutAmountPerCycle: (minOutAmountPerCycle: BigInt) => void;
    setMaxOutAmountPerCycle: (maxOutAmountPerCycle: BigInt) => void;
    setStartAt: (startAt: BigInt) => void;
    setUserInTokenAccount: (
        Account: PublicKey) => void;
    setDCA: (dcaPubKey: PublicKey) => void;
    setWithDrawAmount: (withDrawAmount: BigInt) => void;
}

interface ILimitOrderStore {
    owner: PublicKey;
    inAmount: BN;
    outAmount: BN;
    inputMint: PublicKey;
    outputMint: PublicKey;
    expiredAt: BN | null;
    base: PublicKey;
    orderPubKey: PublicKey;

    setOwner: (owner: PublicKey) => void;
    setInAmount: (inAmount: BN) => void;
    setOutAmount: (outAmount: BN) => void;
    setInputMint: (inputMint: PublicKey) => void;
    setOutputMint: (outputMint: PublicKey) => void;
    setExpiredAt: (expiredAt: BN) => void;
    setBase: (base: PublicKey) => void;
    setOrder: (orderPubKey: PublicKey) => void;
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

const useLimitOrderStore = create<ILimitOrderStore>((set) => ({

    owner: new PublicKey(""),
    inAmount: new BN(0),
    outAmount: new BN(0),
    inputMint: new PublicKey(""),
    outputMint: new PublicKey(""),
    expiredAt: null,
    base: new PublicKey(""),
    orderPubKey: new PublicKey(""),

    setOwner: (owner: PublicKey) => set({ owner }),
    setInAmount: (inAmount: BN) => set({ inAmount }),
    setOutAmount: (outAmount: BN) => set({ outAmount }),
    setInputMint: (inputMint: PublicKey) => set({ inputMint }),
    setOutputMint: (outputMint: PublicKey) => set({ outputMint }),
    setExpiredAt: (expiredAt: BN) => set({ expiredAt }),
    setBase: (base: PublicKey) => set({ base }),
    setOrder: (orderPubKey: PublicKey) => set({ orderPubKey }),
}));

export { useDCAStore, useLimitOrderStore };