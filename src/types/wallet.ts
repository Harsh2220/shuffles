export interface IToken {
  price: string;
  name: string;
  image: string;
  symbol: string;
  balance: number;
  address: string;
  rawPrice: number
}

export interface JupTokens {
  address: string
  chainId: number
  decimals: number
  name: string
  symbol: string
  logoURI: string
  extensions: Extensions
  tags: string[]
  rawPrice: number
}

export interface Extensions {
  coingeckoId: string
}

export type Wallet = {
  name: string;
  seed: string | null;
  publicKey: string;
  secretKey: string;
}