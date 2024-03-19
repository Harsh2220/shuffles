import Button from "@/src/components/UI/Button";
import { useRouter } from "expo-router";
import React from "react";
import * as Bip39 from "bip39";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { getTokenBalance } from "@/src/utils/balance";

export default function Home() {
  const router = useRouter();

  async function handle() {
    const mnemonic = Bip39.generateMnemonic();
    const seed = Bip39.mnemonicToSeedSync(mnemonic, "").slice(0, 32);
    const keypair = Keypair.fromSeed(seed);
    const wallets = [
      {
        name: "wallet 1",
        seed: null,
        publicKey: keypair.publicKey.toBase58(),
        secretKey: bs58.encode(keypair.secretKey),
      },
    ];
    console.log(JSON.stringify(wallets));
  }

  return (
    <Button onPress={handle} size="small">
      Connect wallet
    </Button>
  );
}
