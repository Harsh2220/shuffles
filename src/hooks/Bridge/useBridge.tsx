import useBridgeStore from "@/src/store/bridge";
import { connection } from "@/src/utils/connection";
import {
  ChainAddress,
  TokenId,
  Wormhole,
  routes,
} from "@wormhole-foundation/connect-sdk";
import { EvmPlatform } from "@wormhole-foundation/connect-sdk-evm";
import "@wormhole-foundation/connect-sdk-evm-tokenbridge";
import {
  SolanaPlatform,
  getSolanaSigner,
} from "@wormhole-foundation/connect-sdk-solana";
import "@wormhole-foundation/connect-sdk-solana-tokenbridge";

export default function useBridge() {
  const {
    amount,
    receiver,
    chain,
    sellToken,
    setTxHash,
    setError,
    setDstAmount,
  } = useBridgeStore();

  async function bridgeTokens() {
    try {
      if (!chain?.whChain || !receiver || !sellToken) return;
      const wh = new Wormhole("Mainnet", [SolanaPlatform, EvmPlatform]);

      const srcChain = wh.getChain("Solana");
      const destChain = wh.getChain(chain?.whChain);
      const sourceToken: TokenId = Wormhole.tokenId(
        "Solana",
        sellToken?.address!
      );

      await srcChain.getTokenBridge();

      await destChain.getTokenBridge();

      const sAddress: ChainAddress = Wormhole.chainAddress(
        "Solana",
        "HkS4TZQbbAvgGUVdvJV5hUaXg2T3cecjTCRou6WsZfMN"
      );

      const rAddress: ChainAddress = Wormhole.chainAddress(
        chain?.whChain,
        receiver
      );

      const xfer = await wh.tokenTransfer(
        sourceToken,
        BigInt(Number(amount) * Math.pow(10, sellToken.decimals)),
        sAddress,
        rAddress,
        true
      );

      console.log("xfer", xfer);

      const signer = await getSolanaSigner(connection, "");

      console.log("Starting transfer", signer);
      const srcTxids = await xfer.initiateTransfer(signer);
      console.log(`Completed transfer: `, srcTxids);
      setTxHash(srcTxids[0]);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  async function estimate() {
    try {
      if (!chain?.whChain || !receiver || !sellToken) return;
      setError(false);
      setTxHash(null);
      const wh = new Wormhole("Mainnet", [SolanaPlatform, EvmPlatform]);

      const srcChain = wh.getChain("Solana");
      const destChain = wh.getChain(chain?.whChain);
      const sourceToken: TokenId = Wormhole.tokenId(
        "Solana",
        sellToken?.address!
      );

      await srcChain.getTokenBridge();

      await destChain.getTokenBridge();

      const sAddress: ChainAddress = Wormhole.chainAddress(
        "Solana",
        "HkS4TZQbbAvgGUVdvJV5hUaXg2T3cecjTCRou6WsZfMN"
      );

      const rAddress: ChainAddress = Wormhole.chainAddress(
        chain?.whChain,
        receiver
      );
      const resolver = wh.resolver([
        routes.AutomaticTokenBridgeRoute, // automatic token bridge
      ]);

      const destTokens = await resolver.supportedDestinationTokens(
        sourceToken,
        srcChain,
        destChain
      );

      const destinationToken = destTokens[0]!;

      const tr = await routes.RouteTransferRequest.create(wh, {
        from: sAddress,
        to: rAddress,
        source: sourceToken,
        destination: destinationToken,
      });

      const foundRoutes = await resolver.findRoutes(tr);
      const bestRoute = foundRoutes[0];
      console.log(bestRoute);
      const validated = await bestRoute.validate({
        amount: amount,
      });
      if (!validated.valid) throw validated.error;
      const quote = await bestRoute.quote(validated.params);
      if (quote?.success) {
        const destinationAmount =
          Number(quote?.destinationToken?.amount?.amount) /
          Math.pow(10, Number(quote?.destinationToken?.amount?.decimals));
        setDstAmount(destinationAmount.toString());
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return { bridgeTokens, estimate };
}
