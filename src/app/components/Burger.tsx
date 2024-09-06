import React from "react";
import Image from "next/image";

export default function Burger() {
  return (
    <div className="Cover bg-[0,0,0,0.4] w-full h-full z-20">
      <div className="bg-[#fff] w-1/2 flex flex-col gap-[53px]">
        <Image
          src={"/images/icon-close.svg"}
          width={13.4}
          height={13.4}
          alt="close icon"
        ></Image>
        <div className="textCon flex flex-col gap-[20px] ">
          <span className="text-[#1D2026] text-[18px] font-bold leading-[26px]">
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
