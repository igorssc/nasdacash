import { useContext } from "react";
import CountUp from "react-countup";
import roundedBorder from "../assets/rounded-border.svg";
import { ExplorerContext } from "../contexts/ExplorerContext";
import { Container } from "./Container";

export const PriceDetails = () => {
  const { currencyData } = useContext(ExplorerContext);

  const data = [
    {
      title: "Price",
      value: {
        end: currencyData && currencyData[0].usd,
        decimals: 4,
        prefix: "$ ",
      },
      subValue: {
        end: currencyData && currencyData[0].btc,
        decimals: 8,
        prefix: "BTC ",
      },
    },
    {
      title: "Market cap",
      value: {
        end: currencyData && currencyData[0].usd * currencyData[0].supply,
        decimals: 2,
        prefix: "$ ",
      },
    },
    {
      title: "Blocks",
      value: {
        end: currencyData && currencyData[0].blocks,
      },
    },
    {
      title: "Masternodes",
      value: {
        end: currencyData && currencyData[0].mnsOn + currencyData[0].mnsOff,
      },
      subValue: {
        end: currencyData && currencyData[0].mnsOn,
        prefix: "Online: ",
      },
    },
    {
      title: "Total addresses",
      value: {
        end: currencyData && currencyData[0].countCarverAddresses,
      },
      visibleOnMobile: false,
    },
  ];

  return (
    <>
      <div className="bg-white py-10 text-gray-900 relative">
        <img
          src={roundedBorder}
          alt=""
          className="absolute -top-[49px] h-[50px] w-full z-30"
        />
        <Container className="px-2 md:px-10 grid grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-0 lg:justify-around text-center">
          {data.map(({ title, value, subValue, visibleOnMobile = true }) => (
            <div
              className={`flex flex-col gap-5 w-full border-gray-400 even:border-l-2 lg:border-l-2 lg:first:border-0 ${
                visibleOnMobile || "hidden lg:flex"
              }`}
            >
              <h1 className="text-base font-normal">{title}</h1>
              <p className="text-2xl lg:text-4xl text-secondary">
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
          ))}
        </Container>
      </div>
    </>
  );
};
