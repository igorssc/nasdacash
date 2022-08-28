import { Question } from "./Question";
import { Title } from "./Title";

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
  {
    question: "What is masternode?",
    answer:
      "A Masternode is a specially configured wallet that will support the network in more ways than a normal staking wallet. These functions require 10,000 NSDCs to start and therefore the user is rewarded for both supporting the network and locking the collateral.",
  },
  {
    question: "Why should I run a Masternode?",
    answer:
      "Being a Masternode holder is incentivized by being rewarded more NSDC than stakers through the higher block reward. Masternode reward is equal to 80%, while staking reward is 20% per block.",
  },
  {
    question: "What does it mean to lock coins as Masternode collateral?",
    answer:
      "Your 10,000 NSDC is still yours to completely control, however should you spend the 10K NSDC your masternode will stop and you will no longer earn block rewards. The 10,000 locked NSDCs simply act as collateral and allow you and your masternode server to secure the NSDC network.",
  },
  {
    question: "What Are The Minimum Hardware Requirements?",
    answer:
      "It is recommended that the machine running the NSDC wallet has 2GB RAM, although 1GB RAM with 1GB swap is fine. The NSDC blockchain is only ~18GB, but, for future use it is recommended to have at least 30GB free storage space. Additionally, a single core processor is sufficient to run the network. With these low requirements, it’s possible to run the entire network on a 2GB RAM model Raspberry Pi.",
  },
  {
    question: "What is a Proof of Stake?",
    answer:
      "Proof of Stake is an emerging consensus mechanism that needs to be performed in order to create a new group of trustless transactions (the so-called block) on a distributed ledger called blockchain. In the new age of Digital Currencies, there has to be something to back the creation of the coins, and with that comes Proof of Stake. It is the green way of receiving (staking) crypto in comparison to the Proof of Work coins you have probably heard of with Bitcoin or Monero. They use more energy than a small country to power their blockchain. NSDC uses far less energy than Bitcoin or Monero.",
  },
  {
    question: "What are the advantages of PoS over PoW?",
    answer:
      "Compared to the PoW cryptocurrencies like Bitcoin or Monero, it is far easier and less costly to participate in the network and receive rewards with NSDC. You can stake even with 1 NSDC, and with NSDC's Cold Staking, you have the opportunity to keep your energy and hardware costs as low as possible.",
  },
  {
    question: "What is Staking?",
    answer:
      "Staking is the process of locking your coins for any time period set by you in order to help the network achieve consensus of proof of stake by validating every transaction that occurs on the network to be written permanently to the blockchain. In return stakers that mint the next block are rewarded a block reward.",
  },
  {
    question: "How does the staking work?",
    answer:
      "Whenever an user has at least 1 NSDC in their fully synchronized NSDC core wallet, that node then is permitted to participate in the network with its corresponding amount of stake. NSDC uses an advanced Proof of Stake algorithm, which effectively secures the network against malicious actors. This allows NSDC owners to receive block rewards just by helping to secure the network. Anyone who owns NSDC can stake and receive rewards.",
  },
  {
    question: "How can I receive NSDCs as the rewards with Proof of Stake?",
    answer:
      "It is simple. Buy NSDCs on the exchange, move coins to your wallet, hold, and unlock your wallet for staking. The more coins you hold in your wallet, the more likely you will get a reward.",
  },
];

export const CommonQuestions = () => {
  return (
    <>
      <div className="px-4 pt-16 pb-10 flex flex-col gap-16 items-center">
        <Title title="FAQs" />
        <div className="container mx-auto w-full relative z-10">
          {questions.map(({ question, answer }) => (
            <Question question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </>
  );
};
