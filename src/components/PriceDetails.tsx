import { useContext } from "react";
import CountUp from "react-countup";
import roundedBorder from "../assets/rounded-border.svg";
import { ExplorerContext } from "../contexts/ExplorerContext";

interface GroupProps {
  title: string;
  value: {
    end?: number;
    decimals?: number;
    prefix?: string;
  };
  subValue?: {
    end?: number;
    decimals?: number;
    prefix?: string;
  };
  className?: string;
}

const Group = ({ title, value, subValue, className }: GroupProps) => {
  return (
    <div
      className={`flex flex-col gap-5 w-full group-price-details ${
        className ?? ""
      }`}
    >
      <h1 className="text-base font-normal">{title}</h1>
      <p className="text-2xl lg:text-4xl text-secondary font-light">
        {value.end ? (
          <CountUp
            end={value.end}
            duration={1}
            separator=","
            decimals={value.decimals || 0}
            decimal="."
            prefix={value.prefix || ""}
            enableScrollSpy={true}
          />
        ) : (
          0
        )}
        <small className="block text-secondary/60 text-sm lg:text-base">
          {subValue?.end && (
            <CountUp
              end={subValue.end}
              duration={1}
              separator=","
              decimals={subValue.decimals || 0}
              decimal="."
              prefix={subValue.prefix || ""}
              enableScrollSpy={true}
            />
          )}
        </small>
      </p>
    </div>
  );
};

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
        <div className="container px-2 md:px-10 mx-auto grid grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-0 lg:justify-around text-center">
          <Group
            title="Price"
            value={{
              end: currencyData && currencyData[0].usd,
              decimals: 4,
              prefix: "$ ",
            }}
            subValue={{
              end: currencyData && currencyData[0].btc,
              decimals: 8,
              prefix: "BTC ",
            }}
          />
          <Group
            title="Market cap"
            value={{
              end: currencyData && currencyData[0].usd * currencyData[0].supply,
              decimals: 2,
              prefix: "$ ",
            }}
          />
          <Group
            title="Blocks"
            value={{
              end: currencyData && currencyData[0].blocks,
            }}
          />
          <Group
            title="Masternodes"
            value={{
              end:
                currencyData && currencyData[0].mnsOn + currencyData[0].mnsOff,
            }}
            subValue={{
              end: currencyData && currencyData[0].mnsOn,
              prefix: "Online: ",
            }}
          />
          <Group
            title="Total addresses"
            value={{
              end: currencyData && currencyData[0].countCarverAddresses,
            }}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </>
  );
};
