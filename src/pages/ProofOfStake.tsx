import coldStakingImg from "../assets/cold-staking.png";
import masternodesImg from "../assets/masternodes.png";
import posImg from "../assets/pos.png";
import { Box } from "../components/Box";
import { CommonQuestions } from "../components/CommonQuestions";
import { Container } from "../components/Container";
import { MiningHighlight } from "../components/MiningHighlight";
import { ProofOfStakeDetails } from "../components/ProofOfStakeDetails";
import { Title } from "../components/Title";
import { WavesBackground } from "../components/WavesBackground";

export const ProofOfStake = () => {
  const questions = [
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

  return (
    <>
      <WavesBackground>
        <Container className="!pb-0 md:pb-14">
          <MiningHighlight
            title="Advanced"
            subTitle="Proof of Stake"
            resume="Receive rewards for securing the NSDC network just by holding coins in your wallet."
            image={posImg}
          />
        </Container>
      </WavesBackground>
      <Container>
        <Title
          preTitle="Secure the Network and"
          title="Receive Rewards"
          resume="Running a node on the network will automatically participate in the
          validation of blocks and transmission of blocks, while your wallet
          constantly evaluates your personal NSDC transactions to see if you
          win the right to create the next block."
        />
        <ProofOfStakeDetails />
        <Container>
          <Title title="Advanced" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Box
              title="Cold Staking"
              description="Delegate your NSDC for staking to a hot wallet, while maintaining full control and keeping your NSDC secured offline."
              icon={coldStakingImg}
              link={{ href: "/cold-staking", text: "LEARN MORE" }}
              isFitured
            />
            <Box
              title="Masternodes"
              description="Get rewarded without giving up control of your private keys."
              icon={masternodesImg}
              link={{ href: "/masternodes", text: "LEARN MORE" }}
              isFitured
            />
          </div>
        </Container>
        <CommonQuestions questions={questions} />
      </Container>
    </>
  );
};
