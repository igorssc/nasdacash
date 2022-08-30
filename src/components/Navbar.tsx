import { List } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";

export const Navbar = () => {
  const { pathname } = useLocation();

  const items = [
    ["Home", "/"],
    ["Masternodes", "/masternodes"],
    ["Proof of Stake", "/proof-of-stake"],
    ["Cold Staking", "/cold-staking"],
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onChangeMenu = () => {
    setIsOpenMenu((current) => !current);
  };

  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <>
      <div className="sticky top-0 z-50 bg-primary border-b-2 border-secondary">
        <div className="container mx-auto flex flex-row items-center justify-between py-2 px-4">
          <div>
            <img src={logoImg} alt="logo" className="w-14" />
          </div>
          <div>
            <ul className="hidden lg:flex gap-4">
              {items.map(([item, link], index) => (
                <li
                  className={`font-medium text-medium ${
                    pathname === link && "text-purple-400"
                  }`}
                  key={index}
                >
                  <Link to={link}>{item}</Link>
                </li>
              ))}
            </ul>
            <List
              size={32}
              color="#ffffff"
              className="block lg:hidden"
              onClick={onChangeMenu}
            />
          </div>
        </div>
        {isOpenMenu && (
          <div className="my-6 lg:hidden navbar px-4">
            <ul className="container mx-auto flex flex-col gap-6">
              {items.map(([item, link], index) => (
                <li
                  className={`font-medium text-medium ${
                    pathname === link && "text-purple-400"
                  }`}
                  key={index}
                >
                  <Link to={link}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
