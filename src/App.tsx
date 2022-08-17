import { ExplorerProvider } from "./contexts/ExplorerContext";
import { Home } from "./Home";

function App() {
  return (
    <ExplorerProvider>
      <Home />
    </ExplorerProvider>
  );
}

export default App;
