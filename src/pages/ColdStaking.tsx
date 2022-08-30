import coldStakingImg from "../assets/cold-staking.png";
import masternodesImg from "../assets/masternodes.png";
import posImg from "../assets/pos.png";
import { Block } from "../components/Block";
import { ColdStakingDetails } from "../components/ColdStakingDetails";
import { Container } from "../components/Container";
import { MiningHighlight } from "../components/MiningHighlight";
import { Title } from "../components/Title";
import { WavesBackground } from "../components/WavesBackground";

export const ColdStaking = () => {
  return (
    <>
      <WavesBackground>
        <Container className="!pb-0 md:pb-14">
          <MiningHighlight
            title="Secure & Effortless"
            subTitle="Cold Staking"
            resume="Receive staking rewards while your funds are securely locked in offline cold storage."
            image={coldStakingImg}
          />
        </Container>
      </WavesBackground>
      <Container>
        <Title
          preTitle="Staking your NSDC has"
          title="Never Been Easier"
          resume="Delegate your NSDC for staking to a hot wallet while maintaining
          full control. With Cold Staking, you retain the private keys for
          your NSDC, and your staking rewards offline, while a hot wallet
          remains online to stake on your behalf."
        />
        <ColdStakingDetails />
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
              title="Masternodes"
              description="Get rewarded without giving up control of your private keys."
              icon={masternodesImg}
              link={{ href: "/masternodes", text: "LEARN MORE" }}
              isFitured
            />
          </div>
        </Container>
        {/* <CommonQuestions questions={questions}/> */}
      </Container>
    </>
  );
};
