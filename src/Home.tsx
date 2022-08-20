import { About } from "./components/About";
import { BackgroundParticles } from "./components/BackgroundParticles";
import { CommonQuestions } from "./components/CommonQuestions";
import { Header } from "./components/Header";
import { MiningDetails } from "./components/MiningDetails";
import { PriceDetails } from "./components/PriceDetails";
import { WalletDownload } from "./components/WalletsDownload";

export const Home = () => {
  return (
    <>
      <Header />
      <PriceDetails />
      <BackgroundParticles>
        <About />
        <MiningDetails />
        <CommonQuestions />
      </BackgroundParticles>
      <WalletDownload />
    </>
  );
};
