import { BackgroundParticles } from "./components/BackgroundParticles";
import { CommonQuestions } from "./components/CommonQuestions";
import { Details } from "./components/Details";
import { Header } from "./components/Header";
import { PriceDetails } from "./components/PriceDetails";
import { WalletDownload } from "./components/WalletsDownload";

export const Home = () => {
  return (
    <>
      <Header />
      <PriceDetails />
      <BackgroundParticles>
        <Details />
        <CommonQuestions />
      </BackgroundParticles>
      <WalletDownload />
    </>
  );
};
