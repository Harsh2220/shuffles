import { Chain } from "../types/Chain";

export const CHAINS: Chain[] = [
    {
        "chainId": 1,
        "type": "EVM",
        "name": "Ethereum",
        "symbol": "ETH",
        "image": "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg",
        "rpc": "https://rpc.eth.xyz",
        "explorer": "https://etherscan.io/tx",
        "whChain": "Ethereum"
    },
    {
        "chainId": 137,
        "type": "EVM",
        "name": "Polygon",
        "symbol": "MATIC",
        "image": "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg",
        "rpc": "https://rpc.eth.xyz",
        "explorer": "https://polygonscan.com/tx",
        "whChain": "Polygon"
    },
    {
        "chainId": 56,
        "type": "EVM",
        "name": "Binance Smart Chain",
        "symbol": "BSC",
        "image": "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg",
        "rpc": "https://rpc.eth.xyz",
        "explorer": "https://bscscan.com/tx",
        "whChain": "Bsc"
    },
    {
        "chainId": 43114,
        "type": "EVM",
        "name": "Avalanche",
        "symbol": "AVAX",
        "image": "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/avalanche.svg",
        "rpc": "https://rpc.eth.xyz",
        "explorer": "https://avascan.info/blockchain/c/tx",
        "whChain": "Avalanche"
    },
    {
        "chainId": 42161,
        "type": "EVM",
        "name": "Arbitrum One",
        "symbol": "ETH",
        "image": "https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/arbitrum.svg",
        "rpc": "https://rpc.eth.xyz",
        "explorer": "https://arbiscan.io/tx",
        "whChain": "Arbitrum"
    },
    {
        "chainId": 10,
        "type": "EVM",
        "name": "Optimism",
        "symbol": "ETH",
        "image": "https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png",
        "rpc": "https://rpc.eth.xyz",
        "explorer": "https://optimistic.etherscan.io/tx",
        "whChain": "Optimism"
    },
    {
        "chainId": 8453,
        "type": "EVM",
        "name": "Base",
        "symbol": "ETH",
        "image": "https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/base.logo.svg",
        "rpc": "https://rpc.eth.xyz",
        "explorer": "https://basescan.org/tx",
        "whChain": "Base"
    },
]