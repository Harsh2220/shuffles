import { Wormhole } from "@wormhole-foundation/connect-sdk";
import { EvmPlatform } from "@wormhole-foundation/connect-sdk-evm";
import { SolanaPlatform } from "@wormhole-foundation/connect-sdk-solana";

const wormhole = async () => {
    const network = "Mainnet";
    const wh = new Wormhole(network, [EvmPlatform, SolanaPlatform]);

    const srcChain = wh.getChain("Solana");
    const tokenBridge = await srcChain.getTokenBridge();
    const rpc = await srcChain.getRpc();
}

export { wormhole };


