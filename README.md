### Shuffles - Your Passport to Seamless Cross-Chain Trading on Mobile 📱

<img src="/src/assets/images/icon.png" width="100" height="100">

Shuffles is a mobile app that allows users to trade cryptocurrencies across different blockchains. It is a non-custodial wallet that enables users to trade directly from their wallets without the need to visit different websites to perform different DeFi operations. 

## Shuffles is a one-stop solution for all your DeFi needs.

### Features:
- **Cross-Chain Swaps**: Trade cryptocurrencies across different blockchains.
- **Essential DeFi features**: Access to all DeFi features like DCA, limit orders, lending, borrowing, etc.
- **Non-Custodial Wallet**: You are in control of your funds.
- **Secure**: Your private keys are stored securely on your device.
- **Enhanced User Experience (UX)**: Prioritizing intuitive design and navigation

## Why Now?

Current solution providers are premitive and they lack support for essential DeFi, we at Shuffles provides all the essential features from cross-chain swaps to DCA, limit orders by extracting the complexity from user to provide them the best user experience on the go, so that they can access all these features on their fingertip by using shuffles.

![ROADMAP](/src/assets/images/roadmap.png)

We have more features in the pipeline so that in the future we can create a whole DeFi suite for user so that they don't have to visit 10 different websites to perform 10 different tasks, they can basically access all these features inside the shuffles application.

## How we made it

We are using [Jupiter](https://station.jup.ag/docs/dca/dca-sdk) For the DCA and limit orders so that user can invest systematically invest over time. We have integrated [Wormhole](https://docs.wormhole.com/wormhole/reference/sdk-docs) for the cross-chain swaps where we are using the automated token bridge so that user don't have to pay the gas fees on both of the chains, they can automatically redeem the assets on the destination chain. We are also using [Birdeye](https://birdeye.so/) for the live asset prices and calculation of the asset price during the DCA & limit orders. We have integrated [Shyft](https://docs.shyft.to/solana-apis/) for fetching all the assets of the user's wallet, and lastly we are using the [Helius](https://docs.helius.dev/) for the analytics of the user's wallet including the activity of the user.

## How to run the project

We believe that you already have react-native and expo set-up on your machine, if not then please install it by going through this [guide](https://reactnative.dev/docs/environment-setup)

```sh
npm i
```

Create environment variable file and paste all the values with reference `.env.example`

```sh
touch .env  # PASTE keys from the .env.example file
```

Then run the following command run all the applications:

```sh
npx expo run:ios # For starting the application on the iOS simulator
```

OR

```sh
npx expo run:android # For starting the application on the emulator
```
