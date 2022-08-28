import posImg from "../assets/pos.png";
import { Container } from "./Container";
import { MiningHighlight } from "./MiningHighlight";
import { ProofOfStakeDetails } from "./ProofOfStakeDetails";
import { Title } from "./Title";
import { WavesBackground } from "./WavesBackground";

export const ProofOfStake = () => {
  return (
    <>
      <WavesBackground>
        <Container>
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
      </Container>
    </>
  );
};
