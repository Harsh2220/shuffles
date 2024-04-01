
export async function getTokenInfo(tokenAddress:string){
    const response = await fetch(`https://api.shyft.to/sol/v1/token/get_info?network=mainnet-beta&token_address=${tokenAddress}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.EXPO_PUBLIC_SHYFT_API_KEY as string
        }
    });

    const data = await response.json();
    return data;
}