import networkImg from "../assets/network.png";

export const About = () => {
  return (
    <>
      <div className="container m-auto flex flex-col justify-around px-4 pt-16 pb-10">
        <div className="grid grid-cols-2 items-center justify-center">
          <div>
            <h1 className="text-center text-4xl font-black mb-16 relative z-10">
              Nasdacash
            </h1>
            <div className="font-light flex flex-col gap-4">
              <p className="text-justify relative z-10">
                Nasdacash is a cryptocurrency focused on offering freedom to
                consumers who want to enjoy the convenience of Moderna shopping,
                but also want the unique features of the virtual currency.
                Nasdacash allows you to quickly and affordably move money
                anywhere, anytime and to anyone.
              </p>
              <p className="text-justify relative z-10">
                The Nasdacash network counts as a form of mining the PoS (Proof
                of Stake), which uses a random draw to decide who will be the
                creator of the next block. In this model the potential creator
                must already have assets in the specific currency and whoever
                has more coins has more chances to be the creator/drawn. And in
                an innovative way, it also has another form of mining, the
                Masternode! Miners can acquire the status of a Masternode by
                depositing a minimum of 10,000 NSDC. They are tasked with
                processing transactions on the blockchain.
              </p>
              <p className="text-justify relative z-10">
                The presence of Masternodes not only increases the security of
                the network, but ensures a fast speed of transactions. Because
                this requires additional effort and resources, Masternodes are
                appropriately rewarded by Nasdacash for the support they
                provide. 20% of the rewards go to all PoS miners, while
                Masternodes receive 80%.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={networkImg}
              alt="Network from cryptocurrency"
              className="w-[30rem] max-w-full h-auto animate-details relative z-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};
