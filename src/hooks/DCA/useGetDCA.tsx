import useWalletStore from "@/src/store/wallet";
import { dca } from "@/src/utils/connection";
import { PublicKey } from "@solana/web3.js";

export default function useGetDCA() {
  const {} = useWalletStore();

  async function getUserDCAs() {
    try {
      const dcaAccounts = await dca.getCurrentByUser(
        new PublicKey("HkS4TZQbbAvgGUVdvJV5hUaXg2T3cecjTCRou6WsZfMN")
      );
      console.log(dcaAccounts);
    } catch (error) {
      console.log(error);
    }
  }

  return { getUserDCAs };
}
