import masternodesImg from "../assets/masternodes.png";
import { BannerMasternode } from "./BannerMasternode";
import { Container } from "./Container";
import { EstimateMasternodeRewards } from "./EstimateMasternodeRewards";
import { MasternodesRequirements } from "./MasternodeRequirements";
import { MasternodesDetails } from "./MasternodesDetails";
import { MiningHighlight } from "./MiningHighlight";
import { Title } from "./Title";
import { WavesBackground } from "./WavesBackground";

export const Masternodes = () => {
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
      </Container>
    </>
  );
};
