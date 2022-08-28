import { useContext } from "react";
import { ExplorerContext } from "../contexts/ExplorerContext";

export const MiningDetailsBlock = () => {
  const { currencyData } = useContext(ExplorerContext);

  const details = [
    ["MN Collateral", "10,000 NSDC"],
    ["Block Time", "120 seconds"],
    ["Coin Maturity", "60 blocks"],
    ["Min Stake Age", "1 hour"],
    [
      "Supply",
      `${
        currencyData
          ? currencyData[0].supply.toLocaleString("en-Us", {
              maximumFractionDigits: 0,
            })
          : 0
      } NSDC`,
    ],
    ["Total Supply", "60,000,000 NSDC"],
    ["Premine", "25,200,000 NSDC", false],
    ["RPC Report", "15017", false],
    ["P2P Port", "15018", false],
  ];

  return (
    <>
      {details.map(([title, content, visibleOnMobile = true]) => (
        <div
          className={`flex h-full flex-col py-8 rounded-xl items-center justify-center bg-miningDetails ${
            visibleOnMobile || "hidden sm:flex"
          }`}
        >
          <h1 className="uppercase font-semibold border-b border-purple-200/50 pb-3 mb-6">
            {title}
          </h1>
          <p>{content}</p>
        </div>
      ))}
    </>
  );
};
