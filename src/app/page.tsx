"use client";
import popUp from "@/usestore/Popup";
import Carusel from "./components/Carusel";
import LargeCarusel from "./components/LargeCarusel";
import PriceOptions from "./components/PriceOptions";
import Texts from "./components/Texts";
import ArrowRight from "./components/ArrowRight";
import ArrowLeft from "./components/ArrowLeft";
import CloseIcon from "./components/CloseIcon";

export default function Home() {
  const popup = popUp();
  return (
    <div className=" parent flex flex-col gap-[24px] max-w-[500px] mx-[auto] my-[0]  des:flex-row des:max-w-[1500px] des:gap-[125px] des:items-center">
      <Carusel />
      <LargeCarusel />
      {popup.show ? (
        <div className="w-screen top-0 left-0 min-h-screen bg-[rgba(0,0,0,0.7)] absolute flex justify-center items-center">
          <LargeCarusel show={popup.show}>
            <ArrowRight />
            <ArrowLeft />
            <CloseIcon />
          </LargeCarusel>
        </div>
      ) : null}

      <div className=" infoCon px-[24px] pb-[88px]">
        <Texts />
        <PriceOptions />
      </div>
    </div>
  );
}
