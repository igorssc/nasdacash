import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const MiningDetailsTable = () => {
  const miningDatePrevision = (blocks: number) => {
    const miningInitData = "2020-09-15";
    const onBlockTimeInMiliseconds = 120000;

    const datePrevisionInMilliseconds =
      new Date(miningInitData).getTime() + blocks * onBlockTimeInMiliseconds;

    return new Date(datePrevisionInMilliseconds);
  };

  const table = {
    head: [
      "Start block",
      "End block",
      "Block Reward",
      "PoS Reward",
      "MN Reward",
      "Prevision",
    ],
    body: [
      [
        1,
        200,
        126000,
        0,
        0,
        format(miningDatePrevision(200), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
      [
        201,
        525600,
        10,
        2,
        8,
        format(miningDatePrevision(201), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
      [
        525601,
        1051201,
        5,
        1,
        4,
        format(miningDatePrevision(525601), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
      [
        1051202,
        1576802,
        2.5,
        0.5,
        2,
        format(miningDatePrevision(1051202), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
      [
        1576803,
        2102403,
        1.25,
        0.25,
        1,
        format(miningDatePrevision(1576803), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
      [
        2102404,
        2628004,
        0.625,
        0.125,
        0.5,
        format(miningDatePrevision(2102404), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
      [
        2628005,
        81407174,
        0.3125,
        0.0625,
        0.25,
        format(miningDatePrevision(2628005), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
      [
        81407175,
        "-",
        "-",
        "-",
        "-",
        format(miningDatePrevision(81407175), "yyyy'-'MM'-'dd", {
          locale: ptBR,
        }),
      ],
    ],
  };

  return (
    <>
      <table className="text-center w-full [&_th]:px-6 md:[&_th]:px-0 [&_th]:py-4 [&_th]:font-semibold [&_th]:uppercase [&_th]:whitespace-nowrap md:[&_th]:whitespace-normal [&_tr]:border-purple-200/50 [&_tr+tr]:border-t-[1px] [&_td]:py-4">
        <thead>
          <tr>
            {table.head.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.body.map((row, index) => (
            <tr key={index}>
              {row.map((content, secondIndex) => (
                <td key={secondIndex}>{content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
