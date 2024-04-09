import useWalletStore from "@/src/store/wallet";
import { dca } from "@/src/utils/connection";
import { PublicKey } from "@solana/web3.js";

export default function useGetDCA() {
  const { currentWallet } = useWalletStore();

  async function getUserDCAs() {
    try {
      if (!currentWallet?.publicKey) return;
      const dcaAccounts = await dca.getCurrentByUser(
        new PublicKey(currentWallet?.publicKey)
      );
      console.log(dcaAccounts);
    } catch (error) {
      console.log(error);
    }
  }

  return { getUserDCAs };
}
