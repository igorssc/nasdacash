import { About } from "../components/About";
import { BackgroundParticles } from "../components/BackgroundParticles";
import { ColdStaking } from "../components/ColdStaking";
import { CommonQuestions } from "../components/CommonQuestions";
import { Header } from "../components/Header";
import { Masternodes } from "../components/Masternodes";
import { MiningDetails } from "../components/MiningDetails";
import { PriceDetails } from "../components/PriceDetails";
import { ProofOfStake } from "../components/ProofOfStake";
import { WalletDownload } from "../components/WalletsDownload";

export const Home = () => {
  return (
    <>
      <Header />
      <PriceDetails />
      <BackgroundParticles>
        <About />
        <Masternodes />
        <ProofOfStake />
        <ColdStaking />
        <MiningDetails />
        <CommonQuestions />
      </BackgroundParticles>
      <WalletDownload />
    </>
  );
};
