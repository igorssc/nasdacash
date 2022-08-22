import { Question } from "./Question";

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
      "Masternodes are powerful servers backed by collateral held on the Nasdacash network, and are designed to provide advanced services and governance on the blockchain. Masternodes host full copies of the blockchain and provide a unique second layer of services for the network. Masternodes must be backed by Nasdacash-denominated collateral, and in return, their operators receive regular payments for the services they provide to the network.",
  },
  {
    question: "What are the advantages of masternodes?",
    answer:
      "Unlike many cryptocurrencies that only use the POW engine, in digital currencies that use masternode it is possible to earn only by keeping this service active. By keeping a masternode active on the network it is possible to receive rewards that vary according to each currency. Basically part of the block value is reserved to reward masternodes. It can be concluded that it is a form of “holding” and being remunerated for it.",
  },
  {
    question: "What is mining PoS?",
    answer:
      "PoS mining works like a kind of lottery. It dispenses with the use of electricity and also the need to own large machines. In PoS, the process does not work through these machines, but through the nodes in the network. Thus, the nodes function as validators of the blocks, since there is no miner figure.<br/> Mining via PoS requires the user to be able to prove that they own a certain amount of cryptocurrencies. To do this, he needs to send this amount of cryptocurrency to a certain address. With this, the cryptocurrencies will be locked at that address, serving as proof of the user's participation. At the end, the user receives back the blocked cryptocurrencies, along with the reward.",
  },
];

export const CommonQuestions = () => {
  return (
    <>
      <div className="px-4 pt-16 pb-10 flex flex-col gap-16 items-center">
        <h1 className="text-center text-4xl font-black relative z-10">FAQs</h1>
        <div className="container mx-auto w-full relative z-10">
          {questions.map((question) => (
            <Question question={question.question} answer={question.answer} />
          ))}
        </div>
      </div>
    </>
  );
};
