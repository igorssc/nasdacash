import masternodesImg from "../assets/masternodes.png";
import posImg from "../assets/pos.png";
import { About } from "../components/About";
import { Block } from "../components/Block";
import { CommonQuestions } from "../components/CommonQuestions";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { MiningDetails } from "../components/MiningDetails";
import { PriceDetails } from "../components/PriceDetails";
import { Title } from "../components/Title";

export const Home = () => {
  const questions = [
    {
      question: "What is Nasdacash?",
      answer:
        "Released September 2020, Nasdacash is an open-source peer-to-peer cryptocurrency that follows the Decentralized Autonomous Organization Model. It aims to ensure privacy, transaction speed and anonymity. One of the main purposes is to provide an affordable and convenient means to make daily payments for various products and services. NSDC aims to be a practical alternative to bank cards and cash.<br/> It also provides a robust solution for international remittances, particularly in countries where financial freedom is limited. Virtual currency gives users freedom and control so they can send or receive money anywhere, to anyone. With it, there is no need to deal with bureaucracy, exchange rate complexities, delays and charges that increase the financial burden..",
    },
    {
      question: "What is mining?",
      answer:
        "Through a process called 'mining', people use specialized computers to solve extremely difficult mathematical problems. If their solution is correct, they will receive the right to add a new block to the blockchain. When the network verifies that the problem has been resolved correctly, a new block is added to the blockchain and the miner is rewarded with Nasdacash currency.",
    },
  ];

  return (
    <>
      <Header />
      <PriceDetails />
      <About />
      <MiningDetails />
      <Container>
        <Title title="Technologies" />
        <div className="grid sm:grid-cols-2 gap-6">
          <Block
            title="Masternodes"
            description="Get rewarded without giving up control of your private keys"
            icon={masternodesImg}
            link={{ href: "/masternodes", text: "LEARN MORE" }}
            isFitured
          />
          <Block
            title="Proof of Stake"
            description="Receive rewards while holding NSDC for supporting the network,
                  without the need for expensive mining hardware."
            icon={posImg}
            link={{ href: "/proof-of-stake", text: "LEARN MORE" }}
            isFitured
          />
        </div>
      </Container>
      <CommonQuestions questions={questions} type="block" />
    </>
  );
};
