import { Footer } from "./components/Footer";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { WalletDownload } from "./components/WalletsDownload";
import { ExplorerProvider } from "./contexts/ExplorerContext";
import Router from "./Router";

function App() {
  return (
    <ExplorerProvider>
      <Router />
      <ScrollTopButton />
      <WalletDownload />
      <Footer />
    </ExplorerProvider>
  );
}

export default App;
