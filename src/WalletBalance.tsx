import { useEffect, useState, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function WalletBalance() {
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = useCallback(async () => {
    if (!publicKey) return;
    setLoading(true);
    try {
      const lamports = await connection.getBalance(publicKey);
      setBalance(lamports / LAMPORTS_PER_SOL);
    } catch (err) {
      console.error("Failed to fetch balance:", err);
    } finally {
      setLoading(false);
    }
  }, [connection, publicKey]);

  useEffect(() => {
    if (connected) {
      fetchBalance();
    } else {
      setBalance(null);
    }
  }, [connected, fetchBalance]);

  return (
    <div className="wallet-panel">
      <WalletMultiButton />

      {connected && publicKey && (
        <div className="wallet-info">
          <p className="address">
            {publicKey.toBase58().slice(0, 4)}...
            {publicKey.toBase58().slice(-4)}
          </p>
          <p className="balance">
            {loading ? "Loading..." : `${balance?.toFixed(4) ?? "0"} SOL`}
          </p>
          <button onClick={fetchBalance} disabled={loading}>
            Refresh
          </button>
          <p className="note">Devnet balance — get test SOL from a faucet.</p>
        </div>
      )}
    </div>
  );
}
