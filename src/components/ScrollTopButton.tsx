import { CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";

export const ScrollTopButton = () => {
  const top = 20;
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top);
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed z-50 cursor-pointer bg-secondary hover:bg-purple-900 text-gray-100 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 right-7 bottom-5 lg:right-14 lg:bottom-10 border border-gray-900 ${
        !visible && "opacity-0"
      }`}
    >
      <CaretUp size={46} />
    </div>
  );
};
