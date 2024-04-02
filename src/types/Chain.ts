import type { Chain as whChain } from "@wormhole-foundation/sdk-base/dist/esm/constants/chains.d.ts";
export interface Chain {
    chainId: number
    type: string
    name: string
    symbol: string
    image: string
    rpc: string
    explorer: string
    whChain: whChain
}