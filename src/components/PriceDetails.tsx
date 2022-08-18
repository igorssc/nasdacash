import { useContext } from "react";
import roundedBorder from "../assets/rounded-border.svg";
import { ExplorerContext } from "../contexts/ExplorerContext";

export const PriceDetails = () => {
  const { currencyData } = useContext(ExplorerContext);

  console.log(currencyData);

  return (
    <div className="bg-white py-10 text-gray-900 relative">
      <img
        src={roundedBorder}
        alt=""
        className="absolute -top-[50px] h-[50px] w-full z-10"
      />
      <div className="container mx-auto flex flex-row justify-around text-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium">Price</h1>
          <p className="text-lg">
            {currencyData
              ? currencyData[0].usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 4,
                })
              : 0}
            <small className="block text-gray-400">
              BTC{" "}
              {currencyData
                ? currencyData[0].btc.toLocaleString("en-US", {
                    maximumFractionDigits: 8,
                  })
                : 0}
            </small>
          </p>
        </div>
        <div className="border-r-2 border-gray-400"></div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium">Blocks</h1>
          <p className="text-lg">
            {currencyData ? currencyData[0].blocks.toLocaleString("en-US") : 0}
          </p>
        </div>
        <div className="border-r-2 border-gray-400"></div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium">Total addresses</h1>
          <p className="text-lg">
            {currencyData
              ? currencyData[0].countCarverAddresses.toLocaleString("en-US")
              : 0}
          </p>
        </div>
        <div className="border-r-2 border-gray-400"></div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium">Masternodes</h1>
          <p className="text-lg">
            {currencyData ? currencyData[0].mnsOn.toLocaleString("en-US") : 0}
          </p>
        </div>
      </div>
    </div>
  );
};
