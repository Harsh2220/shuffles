import { DCA, Network } from "@jup-ag/dca-sdk";
import { LimitOrderProvider } from "@jup-ag/limit-order-sdk";
import { Connection } from "@solana/web3.js";

const connection = new Connection('https://api.mainnet-beta.solana.com');

const dca = new DCA(connection, Network.MAINNET);

const limitOrder = new LimitOrderProvider(
    connection
);

export { connection, dca, limitOrder };