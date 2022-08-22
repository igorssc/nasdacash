import { useContext } from "react";
import CountUp from "react-countup";
import roundedBorder from "../assets/rounded-border.svg";
import { ExplorerContext } from "../contexts/ExplorerContext";

export const PriceDetails = () => {
  const { currencyData } = useContext(ExplorerContext);

  return (
    <>
      <div className="bg-white py-10 text-gray-900 relative">
        <img
          src={roundedBorder}
          alt=""
          className="absolute -top-[49px] h-[50px] w-full z-30"
        />
        <div className="container mx-auto flex flex-row justify-around text-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-base font-normal">Price</h1>
            <p className="text-4xl text-secondary font-light">
              {currencyData ? (
                <CountUp
                  end={currencyData[0].usd}
                  duration={1}
                  separator=","
                  decimals={4}
                  decimal="."
                  prefix="$ "
                  enableScrollSpy={true}
                />
              ) : (
                0
              )}
              <small className="block text-secondary/60 text-base">
                {currencyData ? (
                  <CountUp
                    end={currencyData[0].btc}
                    duration={1}
                    separator=","
                    decimals={8}
                    decimal="."
                    prefix="BTC "
                    enableScrollSpy={true}
                  />
                ) : (
                  0
                )}
              </small>
            </p>
          </div>
          <div className="border-r-2 border-gray-400"></div>
          <div className="flex flex-col gap-5">
            <h1 className="text-base font-normal">Blocks</h1>
            <p className="text-4xl text-secondary font-light">
              {currencyData ? (
                <CountUp
                  end={currencyData[0].blocks}
                  duration={1}
                  separator=","
                  decimals={0}
                  enableScrollSpy={true}
                />
              ) : (
                0
              )}
            </p>
          </div>
          <div className="border-r-2 border-gray-400"></div>
          <div className="flex flex-col gap-5">
            <h1 className="text-base font-normal">Total addresses</h1>
            <p className="text-4xl text-secondary font-light">
              {currencyData ? (
                <CountUp
                  end={currencyData[0].countCarverAddresses}
                  duration={1}
                  separator=","
                  decimals={0}
                  enableScrollSpy={true}
                />
              ) : (
                0
              )}
            </p>
          </div>
          <div className="border-r-2 border-gray-400"></div>
          <div className="flex flex-col gap-5">
            <h1 className="text-base font-normal">Masternodes</h1>
            <p className="text-4xl text-secondary font-light">
              {currencyData ? (
                <CountUp
                  end={currencyData[0].mnsOn + currencyData[0].mnsOff}
                  duration={1}
                  separator=","
                  decimals={0}
                  enableScrollSpy={true}
                />
              ) : (
                0
              )}
              <small className="block text-secondary/60 text-base">
                {currencyData ? (
                  <CountUp
                    end={currencyData[0].mnsOn}
                    duration={1}
                    separator=","
                    decimals={0}
                    prefix="Online: "
                    enableScrollSpy={true}
                  />
                ) : (
                  0
                )}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
