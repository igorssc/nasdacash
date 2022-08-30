import { ExplorerProvider } from "./contexts/ExplorerContext";
import Router from "./Router";

function App() {
  return (
    <ExplorerProvider>
      <Router />
    </ExplorerProvider>
  );
}

export default App;
