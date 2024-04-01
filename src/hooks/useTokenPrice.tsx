export default function useTokenPrice() {
  async function getTokenPrice(address: string) {
    try {
      const res = await fetch(
        `https://public-api.birdeye.so/public/price?address=${address}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.EXPO_PUBLIC_BIRDEYE_API_KEY as string,
          },
        }
      );
      const data = await res.json();
      return data.data.value;
    } catch (error) {
      console.log(error);
    }
  }

  return { getTokenPrice };
}
