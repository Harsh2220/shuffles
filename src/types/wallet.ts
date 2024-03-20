export interface IToken {
    price: string;
    name: string;
    image: string;
    symbol: string;
    balance: number;
}

export type Wallet = {
    name: string;
    seed: string | null;
    publicKey: string;
    secretKey: string;
}