import { PublicKey } from "@solana/web3.js";
import { create } from "zustand";
// import { BN } from "@coral-xyz/anchor";
import { IToken, JupTokens } from "../types/wallet";

interface IDCAStore {
    payer: PublicKey | null;
    user: PublicKey | null;
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

    setPayer: (payer: PublicKey) => void;
    setUser: (user: PublicKey) => void;
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
}

// interface ILimitOrderStore {
//     owner: PublicKey | null;
//     inAmount: BN;
//     outAmount: BN;
//     inputMint: PublicKey | null;
//     outputMint: PublicKey | null;
//     expiredAt: BN | null;
//     base: PublicKey | null;
//     orderPubKey: PublicKey | null;

//     setOwner: (owner: PublicKey) => void;
//     setInAmount: (inAmount: BN) => void;
//     setOutAmount: (outAmount: BN) => void;
//     setInputMint: (inputMint: PublicKey) => void;
//     setOutputMint: (outputMint: PublicKey) => void;
//     setExpiredAt: (expiredAt: BN) => void;
//     setBase: (base: PublicKey) => void;
//     setOrder: (orderPubKey: PublicKey) => void;
// }

const useDCAStore = create<IDCAStore>((set) => ({

    payer: null,
    user: null,
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
    buyTokenData: null,
    sellTokenData: null,
    setPayer: (payer: PublicKey) => set({ payer }),
    setUser: (user: PublicKey) => set({ user }),
    setInAmount: (inAmount: string) => set({ inAmount }),
    setGasFees: (gasFess: number) => set({ gasFess }),
    setInAmountPerCycle: (inAmountPerCycle: string) => set({ inAmountPerCycle }),
    setCycleSecondsApart: (cycleSecondsApart: string) => set({ cycleSecondsApart }),
    setInputMint: (inputMint: PublicKey) => set({ inputMint }),
    setOutputMint: (outputMint: PublicKey) => set({ outputMint }),
    setMinOutAmountPerCycle: (minOutAmountPerCycle: BigInt) => set({ minOutAmountPerCycle }),
    setMaxOutAmountPerCycle: (maxOutAmountPerCycle: BigInt) => set({ maxOutAmountPerCycle }),
    setStartAt: (startAt: BigInt) => set({ startAt }),
    setUserInTokenAccount: (userInTokenAccount: PublicKey) => set({ userInTokenAccount }),
    setDCA: (dcaPubKey: PublicKey) => set({ dcaPubKey }),
    setWithDrawAmount: (withDrawAmount: BigInt) => set({ withDrawAmount }),
    setBuyTokenData: (buyTokenData: JupTokens) => set({ buyTokenData }),
    setSellTokenData: (sellTokenData: IToken) => set({ sellTokenData }),
}));

// const useLimitOrderStore = create<ILimitOrderStore>((set) => ({

//     owner: null,
//     inAmount: new BN(0),
//     outAmount: new BN(0),
//     inputMint: null,
//     outputMint: null,
//     expiredAt: null,
//     base: null,
//     orderPubKey: null,

//     setOwner: (owner: PublicKey) => set({ owner }),
//     setInAmount: (inAmount: BN) => set({ inAmount }),
//     setOutAmount: (outAmount: BN) => set({ outAmount }),
//     setInputMint: (inputMint: PublicKey) => set({ inputMint }),
//     setOutputMint: (outputMint: PublicKey) => set({ outputMint }),
//     setExpiredAt: (expiredAt: BN) => set({ expiredAt }),
//     setBase: (base: PublicKey) => set({ base }),
//     setOrder: (orderPubKey: PublicKey) => set({ orderPubKey }),
// }));

export { useDCAStore };