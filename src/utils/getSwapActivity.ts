import { Activities, SwapActivity } from "../types/Activitiy";

export async function getSwapActivity(address: string) {
  const response = await fetch(`https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${process.env.EXPO_PUBLIC_HELIUS_API_KEY}&source=JUPITER&type=SWAP`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  const transfers: SwapActivity[] = [];

  for (let index = 0; index < data.length; index++) {
    transfers.push({
      type: data[index].feePayer.includes("DCA") ? Activities.DCA : Activities.SWAP,
      inToken: data[index].tokenTransfers[0].mint.split('/')[0],
      outToken:
        data[index].tokenTransfers.length >= 2 ?
          data[index].tokenTransfers[0].mint.split('/')[0] === data[index].tokenTransfers[1].mint.split('/')[0] ? data[index].tokenTransfers[2].mint.split('/')[0] : data[index].tokenTransfers[1].mint.split('/')[0] : data[index].tokenTransfers[1].mint.split('/')[0],
      outAmount: data[index].tokenTransfers[0].tokenAmount,
      inAmount: data[index].tokenTransfers[1].tokenAmount,
      timestamp: data[index].timestamp,
    });
  }
  return transfers;
}