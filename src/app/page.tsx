"use client";
import popUp from "@/usestore/Popup";
import Carusel from "./components/Carusel";
import LargeCarusel from "./components/LargeCarusel";
import PriceOptions from "./components/PriceOptions";
import Texts from "./components/Texts";

export default function Home() {
  const popup = popUp();
  return (
    <div className=" parent flex flex-col gap-[24px] max-w-[500px] mx-[auto] my-[0] relative des:flex-row des:max-w-[1500px] des:gap-[125px] des:items-center">
      <Carusel />
      <LargeCarusel />
      {popup.show ? (
        <div className="w-screen left-[-200px] min-h-screen bg-[rgba(0,0,0,0.4)] absolute">
          <LargeCarusel />
        </div>
      ) : null}

      <div className=" infoCon px-[24px] pb-[88px]">
        <Texts />
        <PriceOptions />
      </div>
    </div>
  );
}
