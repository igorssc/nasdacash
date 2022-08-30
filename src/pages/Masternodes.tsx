import coldStakingImg from "../assets/cold-staking.png";
import masternodesImg from "../assets/masternodes.png";
import posImg from "../assets/pos.png";
import { BannerMasternode } from "../components/BannerMasternode";
import { Block } from "../components/Block";
import { CommonQuestions } from "../components/CommonQuestions";
import { Container } from "../components/Container";
import { EstimateMasternodeRewards } from "../components/EstimateMasternodeRewards";
import { MasternodesRequirements } from "../components/MasternodeRequirements";
import { MasternodesDetails } from "../components/MasternodesDetails";
import { MiningHighlight } from "../components/MiningHighlight";
import { Title } from "../components/Title";
import { WavesBackground } from "../components/WavesBackground";

export const Masternodes = () => {
  const questions = [
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
        "It is recommended that the machine running the NSDC wallet has 2GB RAM, although 1GB RAM with 1GB swap is fine. Additionally, a single core processor is sufficient to run the network. With these low requirements, it’s possible to run the entire network on a 2GB RAM model Raspberry Pi.",
    },
  ];

  return (
    <>
      <WavesBackground>
        <Container className="!pb-0 md:pb-14">
          <MiningHighlight
            title="Specialized NSDC"
            subTitle="Masternodes"
            resume="Get more rewards for hosting and providing layer two services to the NSDC network."
            image={masternodesImg}
          />
        </Container>
      </WavesBackground>
      <Container>
        <Title
          preTitle="Vote, secure the network and"
          title="Get Rewards"
          resume="Nasdacash Masternodes provide additional nodes to validate blocks and transactions, adding to the distributed security of the network."
        />
        <MasternodesDetails />
        <BannerMasternode />
        <MasternodesRequirements />
        <EstimateMasternodeRewards />
        {/* <MasternodeDocumentation /> */}
        <Container>
          <Title title="Advanced" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Block
              title="Proof of Stake"
              description="Receive rewards while holding NSDC for supporting the network,
                  without the need for expensive mining hardware."
              icon={posImg}
              link={{ href: "/proof-of-stake", text: "LEARN MORE" }}
              isFitured
            />
            <Block
              title="Cold Staking"
              description="Delegate your NSDC for staking to a hot wallet, while maintaining full control and keeping your NSDC secured offline."
              icon={coldStakingImg}
              link={{ href: "/cold-staking", text: "LEARN MORE" }}
              isFitured
            />
          </div>
        </Container>
        <CommonQuestions questions={questions} />
      </Container>
    </>
  );
};
