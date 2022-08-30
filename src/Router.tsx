import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColdStaking } from "./pages/ColdStaking";
import { Home } from "./pages/Home";
import { Masternodes } from "./pages/Masternodes";
import { ProofOfStake } from "./pages/ProofOfStake";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/masternodes" element={<Masternodes />} />
        <Route path="/proof-of-stake" element={<ProofOfStake />} />
        <Route path="/cold-staking" element={<ColdStaking />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
