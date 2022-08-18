import { Details } from "./components/Details";
import { Header } from "./components/Header";
import { PriceDetails } from "./components/PriceDetails";

export const Home = () => {
  return (
    <>
      <Header />
      <PriceDetails />
      <Details />
    </>
  );
};
