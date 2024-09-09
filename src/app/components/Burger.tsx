import React from "react";
import Image from "next/image";
import useBurgerShow from "@/usestore/BurgerShow";

export default function Burger() {
  const burgerShow = useBurgerShow();
  return (
    <div className="Cover bg-[rgba(0,0,0,0.4)] w-full min-h-screen fixed top-0">
      <div className=" min-h-screen bg-[#fff] w-3/5 flex flex-col gap-[53px] pl-[24px] pt-[24px]">
        <Image
          src={"/images/icon-close.svg"}
          width={13.4}
          height={13.4}
          alt="close icon"
          onClick={() => burgerShow.setTrue()}
        ></Image>
        <div className="textCon flex flex-col gap-[20px]  ">
          <span className="text-[#red] text-[18px] font-bold leading-[26px]">
            Collections
          </span>
          <span className="text-[#1D2026] text-[18px] font-bold leading-[26px]">
            Men
          </span>
          <span className="text-[#1D2026] text-[18px] font-bold leading-[26px]">
            Women
          </span>
          <span className="text-[#1D2026] text-[18px] font-bold leading-[26px]">
            About
          </span>
          <span className="text-[#1D2026] text-[18px] font-bold leading-[26px]">
            Contact
          </span>
        </div>
      </div>
    </div>
  );
}
