import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { HTMLProps, useContext } from "react";
import { ExplorerContext } from "../contexts/ExplorerContext";

interface GroupProps extends HTMLProps<HTMLDivElement> {
  title: string;
  content: string;
}

const Group = ({ title, content, ...rest }: GroupProps) => {
  return (
    <div {...rest}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase font-semibold border-b border-purple-200/50 pb-3 mb-4">
          {title}
        </h1>
        <p className="font-light">{content}</p>
      </div>
    </div>
  );
};

export const MiningDetails = () => {
  const { currencyData } = useContext(ExplorerContext);

  const miningDatePrevision = (blocks: number) => {
    const miningInitData = "2020-09-15";
    const onBlockTimeInMiliseconds = 120000;

    const datePrevisionInMilliseconds =
      new Date(miningInitData).getTime() + blocks * onBlockTimeInMiliseconds;

    return new Date(datePrevisionInMilliseconds);
  };

  return (
    <div className="container mx-auto py-14 flex flex-col gap-16 items-center justify-center">
      <h1 className="text-center text-4xl font-black">Mining details</h1>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="grid grid-cols-3 text-center items-center relative z-10 border-[1px] rounded-lg border-purple-200/50 bg-secondary">
          <Group title="MN Collateral" content="10,000 NSDC" />
          <Group title="Block Time" content="120 seconds" />
          <Group title="Coin Maturity" content="60 blocks" />
          <Group title="Min Stake Age" content="1 hour" />
          <Group
            title="Supply"
            content={`${
              currencyData
                ? currencyData[0].supply.toLocaleString("en-Us", {
                    maximumFractionDigits: 0,
                  })
                : 0
            } NSDC`}
          />
          <Group title="Total Supply" content="60,000,000 NSDC" />
          <Group title="Premine" content="25,200,000 NSDC" />
          <Group title="RPC Report" content="15017" />
          <Group title="P2P Port" content="15018" />
        </div>
        <div className="relative z-10 border-[1px] rounded-lg border-purple-200/50 bg-secondary">
          <table className="blocks-table">
            <thead>
              <tr>
                <th>Start block</th>
                <th>End block</th>
                <th>Block Reward</th>
                <th>PoS Reward</th>
                <th>MN Reward</th>
                <th>Prevision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>200</td>
                <td>126,000</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {format(miningDatePrevision(200), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
              <tr>
                <td>201</td>
                <td>525,600</td>
                <td>10</td>
                <td>2</td>
                <td>8</td>
                <td>
                  {format(miningDatePrevision(201), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
              <tr>
                <td>525,601</td>
                <td>1,051,201</td>
                <td>5</td>
                <td>1</td>
                <td>4</td>
                <td>
                  {format(miningDatePrevision(525601), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
              <tr>
                <td>1,051,202</td>
                <td>1,576,802</td>
                <td>2.5</td>
                <td>0.5</td>
                <td>2</td>
                <td>
                  {format(miningDatePrevision(1051202), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
              <tr>
                <td>1,576,803</td>
                <td>2,102,403</td>
                <td>1.25</td>
                <td>0.25</td>
                <td>1</td>
                <td>
                  {format(miningDatePrevision(1576803), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
              <tr>
                <td>2,102,404</td>
                <td>2,628,004</td>
                <td>0.625</td>
                <td>0.125</td>
                <td>0.5</td>
                <td>
                  {format(miningDatePrevision(2102404), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
              <tr>
                <td>2,628,005</td>
                <td>81,407,174</td>
                <td>0.3125</td>
                <td>0.0625</td>
                <td>0.25</td>
                <td>
                  {format(miningDatePrevision(2628005), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
              <tr>
                <td>81,407,175</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  {format(miningDatePrevision(81407175), "yyyy'-'MM'-'dd", {
                    locale: ptBR,
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
