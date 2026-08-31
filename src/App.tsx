import WalletBalance from "./WalletBalance";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Solana Mobile Starter</h1>
        <p>Connect a wallet and check your devnet balance.</p>
      </header>
      <main>
        <WalletBalance />
      </main>
    </div>
  );
}

export default App;
