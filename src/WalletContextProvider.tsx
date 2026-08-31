import { useMemo, type ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Import the default styles for the wallet connect modal/button
import "@solana/wallet-adapter-react-ui/styles.css";

interface Props {
  children: ReactNode;
}

export default function WalletContextProvider({ children }: Props) {
  // Start on devnet so you're not touching real funds while building.
  // Switch to "mainnet-beta" once you're ready to go live.
  const network = "devnet";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Modern wallets (Phantom, Backpack, Solflare) auto-register themselves
  // via the Wallet Standard, so we don't need to list adapters manually here.
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
