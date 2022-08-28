import { useContext, useState } from "react";
import { ExplorerContext } from "../contexts/ExplorerContext";
import { Container } from "./Container";

export const EstimateMasternodeRewards = () => {
  const { currencyData } = useContext(ExplorerContext);

  const [numberOfMasternodes, setNumberOfMasternodes] = useState(1);

  const dailyRewards = currencyData
    ? (((60 * 24) / 2) * 8) / currencyData[0].mnsOn
    : 0;

  return (
    <>
      <div className="bg-miningDetails relative z-10">
        <Container className="lg:flex-row lg:gap-6 !justify-between !px-8">
          <div className="flex flex-col gap-14">
            <h2 className="text-2xl">
              Estimate your{" "}
              <span className="text-5xl block font-black mt-4">
                Masternode Rewards
              </span>
            </h2>
            <p className="text-lg">
              Estimate your rewards for running a NSDC Masternode.
            </p>
            <p className="text-lg italic">
              NOTE: Masternode rewards are always varying based on the number of
              the active Masternodes in the NSDC network.
            </p>
          </div>
          <div className="border-[1px] border-purple-500 rounded-3xl py-8 px-10 lg:px-14 xl:px-20 flex flex-col justify-center items-center gap-6">
            <span className="text-2xl text-center">Number of Masternodes:</span>
            <div className="w-full flex">
              <span
                className="px-6 bg-primary rounded-l-3xl font-black text-3xl cursor-pointer"
                onClick={() =>
                  numberOfMasternodes !== 1 &&
                  setNumberOfMasternodes((current) => current - 1)
                }
              >
                -
              </span>
              <input
                type="number"
                className="w-full disabled:bg-white text-primary font-black text-center"
                value={numberOfMasternodes}
                onChange={(event) =>
                  setNumberOfMasternodes(+event.target.value)
                }
                disabled
              />
              <span
                className="px-6 bg-primary rounded-r-3xl font-black text-3xl cursor-pointer"
                onClick={() => setNumberOfMasternodes((current) => current + 1)}
              >
                +
              </span>
            </div>
            <span className="text-xl text-center">
              Estimated{" "}
              <span className="font-black">
                {currencyData ? currencyData[0].mnRoi24h.toFixed(2) : 0}%
              </span>{" "}
              annual reward
            </span>
            {[
              [
                "Daily rewards:",
                (dailyRewards * numberOfMasternodes).toLocaleString("en", {
                  maximumFractionDigits: 2,
                }),
              ],
              [
                "Weekly rewards:",
                (dailyRewards * numberOfMasternodes * 7).toLocaleString("en", {
                  maximumFractionDigits: 2,
                }),
              ],
              [
                "Monthly rewards:",
                (dailyRewards * numberOfMasternodes * 30).toLocaleString("en", {
                  maximumFractionDigits: 2,
                }),
              ],
              [
                "Yearly rewards:",
                (dailyRewards * numberOfMasternodes * 365).toLocaleString(
                  "en",
                  { maximumFractionDigits: 2 }
                ),
              ],
            ].map(([title, value]) => (
              <div className="flex flex-col gap-3 justify-center items-center w-full">
                <span className="text-lg">{title}</span>
                <span className="font-black text-2xl bg-primary w-full text-center rounded-3xl py-2">
                  {value} NSDC
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
