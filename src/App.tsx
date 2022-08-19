import { Footer } from "./components/Footer";
import { ExplorerProvider } from "./contexts/ExplorerContext";
import { Home } from "./Home";

function App() {
  return (
    <ExplorerProvider>
      <Home />
      <Footer />
    </ExplorerProvider>
  );
}

export default App;
