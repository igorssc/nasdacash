import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollTopButton } from "./ScrollTopButton";
import { WalletDownload } from "./WalletsDownload";

interface LayoutProps {}

export const Layout = ({}: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <ScrollTopButton />
      <Outlet />
      <WalletDownload />
      <Footer />
    </>
  );
};
