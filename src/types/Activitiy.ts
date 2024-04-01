export enum Activities {
    SWAP = "SWAP",
    DCA = "DCA",
}

export type SwapActivity = {
    type: Activities;
    inToken: string;
    outToken: string;
    amount: number;
    timestamp: number;
}