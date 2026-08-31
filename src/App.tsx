import WalletBalance from "./WalletBalance";
import OwlHead from "./OwlHead";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Solana Mobile Starter</h1>
        <p>Connect a wallet and check your devnet balance.</p>
      </header>
      <main>
        <OwlHead />
        <WalletBalance />
      </main>
    </div>
  );
}

export default App;
