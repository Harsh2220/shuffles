export async function getTokenBalance(address: string) {
    interface IToken {
        price: number;
        name: string;
        image: string;
        balance: number;
    }
    let tokens: IToken[] = []; 
    const tokenResponse = await fetch(`https://api.shyft.to/sol/v1/wallet/all_tokens?network=mainnet-beta&wallet=${address}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SHYFT_API_KEY as string
        }
    });
    
    const data = await tokenResponse.json();
    for (let i = 0; i < data.result.length; i++) {
        if (data.result[i].balance > 0.01) {
            const balanceResponse = await fetch(`https://public-api.birdeye.so/public/price?address=${data.result[i].address}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': process.env.BIRDEYE_API_KEY as string
                }
            });
            const balanceData = await balanceResponse.json();
            if (balanceData.data != null) {
                tokens.push({ 
                    price: (balanceData.data.value * data.result[i].balance),
                    name: data.result[i].info.name,
                    image: data.result[i].info.image,
                    balance: data.result[i].balance
                });
            }
        }
    }

    return tokens;
}

export async function getWalletBalance(address: string) {
    const response = await fetch(`https://api.shyft.to/sol/v1/wallet/balance?network=mainnet-beta&wallet=${address}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SHYFT_API_KEY as string
        }
    });
    const data = await response.json();
    const balanceResponse = await fetch(`https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': process.env.BIRDEYE_API_KEY as string
                }
            });
    const balanceData = await balanceResponse.json();

    return {
        balance: data.result.balance,
        price: (balanceData.data.value * data.result.balance)
    };
}