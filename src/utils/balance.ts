interface IToken {
    price: number;
    name: string;
    image: string;
    balance: number;
}

export async function getTokenBalance(address: string) {
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
        const token = data.result[i];

        if (token.balance > 0.01) {
            const balanceResponse = await fetch(`https://public-api.birdeye.so/public/price?address=${token.address}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': process.env.BIRDEYE_API_KEY as string
                }
            });

            const balanceData = await balanceResponse.json();

            if (balanceData.data != null) {
                tokens.push({
                    price: balanceData.data.value * token.balance,
                    name: token.info.name,
                    image: token.info.image,
                    balance: token.balance
                });
            }
        } else if (token.address === 'So11111111111111111111111111111111111111112') {
            const walletBalance = await getWalletBalance(address);

            tokens.push({
                price: walletBalance.price,
                name: "Solana", 
                image: "../src/assets/images/solana.png", 
                balance: walletBalance.balance
            });
        }
    }
    tokens.sort((a, b) => a.price - b.price);
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
        price: balanceData.data.value * data.result.balance
    };
}