import hardwareRequirementsImg from "../assets/hardware-requirements.svg";
import lessEnergyImg from "../assets/less-energy.svg";
import nonCustodialStakingImg from "../assets/non-custodial-staking.svg";
import offlineSolutionsImg from "../assets/offline-solutions.svg";
import { Box } from "./Box";

export const ColdStakingDetails = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          [
            hardwareRequirementsImg,
            "Minimum Hardware Requirements",
            "Most desktops, laptops, and even a Raspberry PI meet the demands required to run a hot wallet for cold staking (single-core CPU, 2 GB of RAM, and 30 GB of storage space).",
          ],
          [
            offlineSolutionsImg,
            "Active Offline Solution",
            "Once delegated, your cold wallet and the private keys to spend your NSDC are not required to remain online until you choose to spend.",
          ],
          [
            lessEnergyImg,
            "Energy Saving",
            "Multiple cold wallets can delegate NSDC to one hot wallet, reducing the energy footprint needed to stake several small wallet balances.",
          ],
          [
            nonCustodialStakingImg,
            "Non-Custodial Staking",
            "Hot wallets control which delegated balances are staked, but only the owner of the actual NSDC retains the ability to spend the delegated coins.",
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
