import blockRewardImg from "../assets/block-reward.svg";
import decentralizedImg from "../assets/decentralized-governance.svg";
import secondLayerImg from "../assets/second-layer-innovations.svg";
import securityImg from "../assets/security.svg";
import { Box } from "./Box";

export const MasternodesDetails = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          [
            securityImg,
            "Securing the NSDC Network",
            "Nasdacash Masternodes provide a 2nd layer of security to the network by providing additional nodes to validate blocks and transactions.",
          ],
          [
            decentralizedImg,
            "Decentralized Governance",
            "Without established decision making protocols, progress, development, and growth can grind to a halt.",
          ],
          [
            secondLayerImg,
            "Second Layer Innovations",
            "Nasdacash utilizes its 2nd layer of masternodes as a blockchain based voting system to ensure decisions get made and allocations are dispersed from the budget.",
          ],
          [
            blockRewardImg,
            "Block Rewards & Voting Rights",
            "Masternode owners are rewarded for their service to the network, with a portion of the block reward being sent to a masternode in a round robin fashion on the creation of each block, and are also given voting rights to participate in governance decisions.",
          ],
        ].map(([icon, title, description], index) => (
          <Box
            title={title}
            icon={icon}
            description={description}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
