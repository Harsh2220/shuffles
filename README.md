# Shuffles - Your Passport to Seamless Cross-Chain Trading on Mobile 📱

![logo](/src/assets/images/icon.png#center)


Shuffles is a mobile app enabling users to seamlessly trade cryptocurrencies across different blockchains. Acting as a non-custodial wallet, Shuffles empowers users to execute trades directly from their wallets without navigating multiple platforms for various DeFi operations.

## Shuffles: A One-stop Solution for All Your DeFi Needs

### Features:
- **Cross-Chain Swaps**: Trade cryptocurrencies across different blockchains.
- **Essential DeFi Features**: Access DCA, limit orders, lending, borrowing, and more.
- **Non-Custodial Wallet**: Maintain control over your funds.
- **Secure**: Private keys securely stored on your device.
- **Enhanced User Experience (UX)**: Intuitive design prioritized for seamless navigation.

## Why Now?

Existing solutions lack support for essential DeFi features. Shuffles streamlines the DeFi experience, offering cross-chain swaps, DCA, limit orders, and more, all within a user-friendly mobile app.

![ROADMAP](/src/assets/images/roadmap.png)

We have exciting features in the pipeline, aiming to create a comprehensive DeFi suite within Shuffles. Say goodbye to visiting multiple websites for different tasks—Shuffles brings them all under one roof.

## How We Made It

- **Jupiter Integration**:
  - Utilizing [Jupiter](https://station.jup.ag/docs/dca/dca-sdk) for Dollar Cost Averaging (DCA) and limit orders, enabling systematic investments.
  - Seamlessly integrated for user-friendly investment strategies.

- **Wormhole Integration**:
  - Integrated [Wormhole](https://docs.wormhole.com/wormhole/reference/sdk-docs) for cross-chain swaps, eliminating gas fees with automated token bridges.
  - Users can redeem assets on the destination chain hassle-free.

- **Birdeye Integration**:
  - Leveraging [Birdeye](https://birdeye.so/) for real-time asset prices and precise calculations during DCA and limit orders.
  - Ensuring accurate investment decisions based on live market data.

- **Shyft Integration**:
  - Integrated [Shyft](https://docs.shyft.to/solana-apis/) for retrieving all assets from the user's wallet.
  - Provides a comprehensive view of the user's portfolio for informed investment strategies.

- **Helius Integration**:
  - Utilizing [Helius](https://docs.helius.dev/) for wallet analytics, offering insights into user activity and portfolio performance.
  - Empowering users with data-driven insights for optimized investment strategies.

## How to Run the Project

Ensure you have React Native and Expo set up on your machine. If not, follow this [guide](https://reactnative.dev/docs/environment-setup).

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
