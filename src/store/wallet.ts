import { create } from "zustand";

type Wallet = {
    name: string;
    seed: string;
    publicKey: string;
    secretKey: string;
}
interface IWallet {
    currentWallet: null | Wallet;
    wallets: null | Wallet[];
    setCurrentWallet: (wallet: Wallet) => void;
    setWallets: (wallets: Wallet[]) => void;
}

const useWalletStore = create<IWallet>((set) => ({
    currentWallet: null,
    wallets: null,
    setCurrentWallet: (currentWallet) =>
        set({
            currentWallet: currentWallet,
        }),
    setWallets: (wallets) =>
        set({
            wallets: wallets,
        }),
}));

export default useWalletStore;