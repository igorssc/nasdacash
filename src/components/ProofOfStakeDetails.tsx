import consistentBlockTimesImg from "../assets/consistent-block-times.svg";
import fairStakeImg from "../assets/fair-stake.svg";
import lessEnergyImg from "../assets/less-energy.svg";
import securityImg from "../assets/security.svg";
import { Block } from "./Block";

export const ProofOfStakeDetails = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          [
            securityImg,
            "Secure Network",
            "The distributed network of individual nodes provides validation of each transaction and block being added to the blockchain, ensuring the blocks and transactions are valid.",
          ],
          [
            consistentBlockTimesImg,
            "Consistent Block Times",
            "The target block spacing is 120 seconds. Time Protocol V2 greatly reduces the variability between the actual block spacing.",
          ],
          [
            lessEnergyImg,
            "Less Energy Consumption",
            "Proof of Stake can be done on everyday household computing platforms and does not require any specialized mining equipment or high energy costs to keep the network functioning.",
          ],
          [
            fairStakeImg,
            "Fair Stake",
            "Every UTXO has the chance of winning a stake, with a linear reduction in difficulty based on the value of the UTXO. NSDC does not have any age multiplier in the staking algorithm.",
          ],
        ].map(([icon, title, description], index) => (
          <Block
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
