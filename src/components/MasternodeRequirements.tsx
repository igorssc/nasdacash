import { ReactSVG } from "react-svg";
import uptimeVps from "../assets/24h-uptime-vps.svg";
import dedicatedVPSImg from "../assets/dedicated-vps.svg";
import nsdcPerNodeImg from "../assets/nsdc-per-node.svg";
import { Title } from "./Title";

export const MasternodesRequirements = () => {
  return (
    <>
      <Title preTitle="Masternode" title="Requirements" />
      <div className="grid sm:grid-cols-3 gap-6">
        {[
          [nsdcPerNodeImg, "10,000 NSDC per node"],
          [dedicatedVPSImg, "Dedicated IP"],
          [uptimeVps, "24hr uptime VPS"],
        ].map(([icon, content], index) => (
          <div
            key={index}
            className="bg-miningDetails py-10 px-3 md:p-10 flex flex-col items-center justify-center relative z-10"
          >
            <ReactSVG
              src={icon}
              className="w-16 md:w-24 fill-purple-500 mb-5"
            />
            <h4 className="pb-3 mb-5 text-xl font-black text-center">
              {content}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};
