import { Block } from "./Block";
import { QuestionDisclosure } from "./QuestionDisclosure";
import { Title } from "./Title";

const questionss = [
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

interface CommonQuestionsProps {
  type?: "disclosure" | "block";
  questions: { question: string; answer: string }[];
}

export const CommonQuestions = ({
  questions,
  type = "disclosure",
}: CommonQuestionsProps) => {
  return (
    <>
      <div className="px-4 pt-16 pb-10 flex flex-col gap-16 items-center">
        <Title title="FAQs" />
        <div
          className={`container mx-auto w-full relative z-10 ${
            type === "block" && "flex flex-col gap-6"
          }`}
        >
          {type === "disclosure"
            ? questions.map(({ question, answer }) => (
                <QuestionDisclosure
                  question={question}
                  answer={answer}
                  key={question}
                />
              ))
            : questions.map(({ question, answer }) => (
                <Block title={question} description={answer} key={question} />
              ))}
        </div>
      </div>
    </>
  );
};
