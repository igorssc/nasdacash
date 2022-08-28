import { Footer } from "./components/Footer";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { ExplorerProvider } from "./contexts/ExplorerContext";
import Router from "./Router";

function App() {
  return (
    <ExplorerProvider>
      <Router />
      <ScrollTopButton />
      <Footer />
    </ExplorerProvider>
  );
}

export default App;
