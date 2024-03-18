import {create} from "zustand";

interface Wallet {
    name: string;
    seed: string;
    publicKey: string;
    secretKey: string;
}

interface WalletStoreState {
    wallets: Wallet[];
}

interface WalletStoreActions {
    addWallet: (wallet: Wallet) => void;
    getCurrentWallet: (index: number) => Wallet | null;
}

type WalletStore = WalletStoreState & WalletStoreActions;

const useWalletStore = create<WalletStore>((set, get): WalletStore => ({
    wallets: [],

    addWallet: (wallet: Wallet) => set((state: WalletStoreState) => ({ wallets: [...state.wallets, wallet] })),
    
    getCurrentWallet: (index: number) => {
        const { wallets } = get();
        if (index >= 0 && index < wallets.length) {
            return wallets[index];
        }
        return null;
    },
}));

export default useWalletStore;
