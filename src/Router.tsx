import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ColdStaking } from "./pages/ColdStaking";
import { Home } from "./pages/Home";
import { Masternodes } from "./pages/Masternodes";
import { ProofOfStake } from "./pages/ProofOfStake";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":id" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="masternodes" element={<Masternodes />} />
          <Route path="proof-of-stake" element={<ProofOfStake />} />
          <Route path="cold-staking" element={<ColdStaking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
