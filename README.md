# Solana Mobile Starter

A Vite + React + TypeScript starter with Solana wallet connection wired up,
built as a first step toward a Solana dApp Store app.

## What's included
- `WalletContextProvider.tsx` — sets up the connection (devnet) and wallet context
- `WalletBalance.tsx` — connect button + fetches and displays your SOL balance
- Wallet Standard auto-detection — Phantom, Backpack, Solflare, etc. show up
  automatically once installed in your browser (no manual adapter list needed)

## Run it locally
```bash
npm install
npm run dev
```
Then open the local URL it prints (usually http://localhost:5173).

## Testing with a real wallet
1. Install a wallet browser extension (e.g. Phantom) if you don't have one.
2. Switch the wallet to **Devnet** in its settings.
3. Click "Select Wallet" in the app, connect, and your devnet balance will show.
4. Get free devnet SOL from https://faucet.solana.com to test with.

## Testing on your Seeker
You own real hardware, so you don't need an emulator:
1. Enable Developer Options + USB debugging on the Seeker.
2. Plug it in via USB.
3. For now this is a web app — to run it as an installed Android app you'll
   need to either wrap it as a PWA/TWA, or migrate to React Native using
   Mobile Wallet Adapter (the native equivalent of what's wired up here).

## Next steps
- Add a "Send SOL" transaction flow using `@solana/web3.js`
- Fetch and display NFTs owned by the connected wallet
- Look into `@solana/mobile-wallet-adapter-protocol` when you move to
  React Native for native Seeker builds
- When ready to publish: Solana dApp Store CLI + Publisher/App/Release NFTs
