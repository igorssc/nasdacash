import coldStakingImg from "../assets/cold-staking.png";
import { ColdStakingDetails } from "./ColdStakingDetails";
import { Container } from "./Container";
import { MiningHighlight } from "./MiningHighlight";
import { Title } from "./Title";
import { WavesBackground } from "./WavesBackground";

export const ColdStaking = () => {
  return (
    <>
      <WavesBackground>
        <Container>
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
      </Container>
    </>
  );
};
