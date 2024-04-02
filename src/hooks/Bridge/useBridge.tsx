import useBridgeStore from "@/src/store/bridge";
import useWalletStore from "@/src/store/wallet";
import { connection } from "@/src/utils/connection";
import {
  ChainAddress,
  TokenId,
  Wormhole,
} from "@wormhole-foundation/connect-sdk";
import {
  EvmPlatform,
  getEvmSignerForKey,
} from "@wormhole-foundation/connect-sdk-evm";
import "@wormhole-foundation/connect-sdk-evm-tokenbridge";
import {
  SolanaPlatform,
  getSolanaSigner,
} from "@wormhole-foundation/connect-sdk-solana";
import "@wormhole-foundation/connect-sdk-solana-tokenbridge";
import { ethers } from "ethers";

export default function useBridge() {
  const { currentWallet } = useWalletStore();
  const { amount, receiver, chain, sellToken } = useBridgeStore();

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
        currentWallet?.publicKey!
      );

      const rAddress: ChainAddress = Wormhole.chainAddress(
        chain?.whChain,
        receiver
      );

      const xfer = await wh.tokenTransfer(
        sourceToken,
        BigInt(Number(amount) * Math.pow(10, sellToken.decimal)),
        sAddress,
        rAddress,
        false
      );

      console.log("xfer", xfer);

      const signer = await getSolanaSigner(connection, "");

      const ethSigner = await getEvmSignerForKey(
        new ethers.JsonRpcProvider(chain.rpc),
        ""
      );

      console.log("Starting transfer", signer);
      const srcTxids = await xfer.initiateTransfer(signer);
      console.log(`Started transfer: `, srcTxids);
      const desTxids = await xfer.fetchAttestation();
      console.log(`Attestation: `, desTxids);
      const srcTxids2 = await xfer.completeTransfer(ethSigner);
      console.log(`Completed transfer: `, srcTxids2);
    } catch (error) {
      console.log(error);
    }
  }

  return { bridgeTokens };
}
