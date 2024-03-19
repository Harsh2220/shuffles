export interface IToken {
    price: string;
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
            'x-api-key': 'ADnf5N5A3zi9F_WM'
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
                    'X-API-KEY': '5c0dc8bf5333455f99dbb2116afbe16d'
                }
            });

            const balanceData = await balanceResponse.json();

            if (balanceData.data != null) {
                tokens.push({
                    price: (balanceData.data.value * token.balance).toFixed(2),
                    name: token.info.name,
                    image: token.info.image,
                    balance: token.balance
                });
            }
        } else if (token.address === 'So11111111111111111111111111111111111111112') {
            const walletBalance = await getWalletBalance(address);

            tokens.push({
                price: walletBalance.price.toFixed(2),
                name: "Solana",  
                image: "https://www.creativefabrica.com/wp-content/uploads/2021/06/16/Cryptocurrency-Solana-Logo-Graphics-13460284-1.jpg", 
                balance: walletBalance.balance
            });
        }
    }
    tokens.sort((a, b) => Number(a.price) - Number(b.price));
    return tokens;
}

export async function getWalletBalance(address: string) {
    const response = await fetch(`https://api.shyft.to/sol/v1/wallet/balance?network=mainnet-beta&wallet=${address}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'ADnf5N5A3zi9F_WM'
        }
    });

    const data = await response.json();

    const balanceResponse = await fetch(`https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': '5c0dc8bf5333455f99dbb2116afbe16d'
        }
    });

    const balanceData = await balanceResponse.json();

    return {
        balance: data.result.balance,
        price: balanceData.data.value * data.result.balance
    };
}