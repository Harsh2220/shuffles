import { useEffect } from "react";
import useWalletStore from "../store/wallet";
import { getTokenBalance } from "../utils/balance";

export default function useWalletData() {
  const { setTokens, tokens, setBalance } = useWalletStore();

  async function handleTokens() {
    try {
      const tokenList = await getTokenBalance(
        "3dTSLCGStegkuoU6dc75DbRdJk4rKV3d5ZCZdSWbTcQv"
      );
      setTokens(tokenList);
    } catch (error) {}
  }

  async function handleBalance() {
    try {
      if (!tokens) return;
      let totalBalance = 0;
      for (let index = 0; index < tokens.length; index++) {
        totalBalance = totalBalance + Number(tokens[index].price);
      }
      setBalance(Number(totalBalance.toFixed(2)));
    } catch (error) {}
  }

  useEffect(() => {
    if (!tokens) {
      handleTokens();
    }
  }, []);

  useEffect(() => {
    handleBalance();
  }, [tokens]);

  return { handleTokens, handleBalance };
}
