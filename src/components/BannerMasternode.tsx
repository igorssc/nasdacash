import { useContext } from "react";
import { ExplorerContext } from "../contexts/ExplorerContext";

export const BannerMasternode = () => {
  const { currencyData } = useContext(ExplorerContext);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 py-4 bg-banner">
        {[
          [
            "NSDC locked in Masternodes",
            currencyData
              ? (
                  (currencyData[0].mnsOn * 10000 * 100) /
                  currencyData[0].supply
                ).toFixed(2) + "%"
              : "0%",
          ],
          [
            "NSDC Masternodes online",
            currencyData ? currencyData[0].mnsOn.toLocaleString("en") : 0,
          ],
          [
            "Daily MN Rewards",
            currencyData
              ? ((((60 * 24) / 2) * 8) / currencyData[0].mnsOn).toFixed(2) +
                " NSDC"
              : "0 NSDC",
          ],
          ["Node Expiration", "120 min"],
        ].map(([title, value]) => (
          <div className="flex flex-col items-center justify-center relative z-10">
            <p className="text-xl font-black mb-4">{value}</p>
            <h4 className="text-center">{title}</h4>
          </div>
        ))}
      </div>
    </>
  );
};
