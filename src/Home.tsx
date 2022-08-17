"use strict";

import { Header } from "./components/Header";
import { World } from "./utils/world";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-2 min-h-[40rem] container mx-auto">
        <div className="flex flex-col text-center items-center justify-center gap-10">
          <h1 className="text-4xl">What is Lorem Ipsum?</h1>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="h-full block">
          <World />
        </div>
      </div>
    </>
  );
};
