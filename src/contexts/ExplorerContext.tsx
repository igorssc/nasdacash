import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface ExplorerProviderProps {
  children: ReactNode;
}

type ExplorerContextData = {
  currencyData: currencyDataProps | undefined;
  transactionsData: transactionsDataProps | undefined;
};

type currencyDataProps = Array<{
  _id: string;
  cap: number;
  blocks: number;
  btc: number;
  diff: number;
  msOff: number;
  netHash: number;
  peers: number;
  status: string;
  supply: number;
  usd: number;
  countCarverAddresses: number;
  countCarverMovements: number;
  uniquePosAddresses24h: number;
  uniqueMasternodeAddresses24h: number;
  posRoi24h: number;
  mnRoi24h: number;
  createdAt: string;
}>;

type transactionsDataProps = Array<{
  _id: string;
  txId: string;
  txType: number;
  amountIn: number;
  amountOut: number;
  blockHeight: number;
  date: string;
  sequence: number;
  addressesIn: number;
  addressesOut: number;
  isReward: boolean;
  blockRewardDetails: string;
}>;

export const ExplorerContext = createContext({} as ExplorerContextData);

export const ExplorerProvider = ({ children }: ExplorerProviderProps) => {
  const [currencyData, setCurrencyData] = useState<currencyDataProps>();
  const [transactionsData, setTransactionsData] =
    useState<transactionsDataProps>();

  useEffect(() => {
    const interval = setInterval(() => {
      api
        .get<currencyDataProps>("coin/history?limit=10")
        .then(({ data }) => setCurrencyData(data));

      api
        .get<transactionsDataProps>("tx/latest?limit=10")
        .then(({ data }) => setTransactionsData(data));
    }, 1000 * 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <ExplorerContext.Provider value={{ currencyData, transactionsData }}>
      {children}
    </ExplorerContext.Provider>
  );
};
