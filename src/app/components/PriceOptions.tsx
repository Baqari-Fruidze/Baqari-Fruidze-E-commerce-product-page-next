import React from "react";
import Image from "next/image";

export default function PriceOptions() {
  return (
    <div className="parent flex flex-col">
      <div className="PriceCon flex justify-between items-center mb-[26px]">
        <div className="flex items-center gap-[16px]">
          <span className="text-[#1D2026] text-[28px] font-bold">$125.00</span>
          <div className="w-[51px] h-[27px] bg-[#FFEEE2] rounded-[6px] flex items-center justify-center">
            50%
          </div>
        </div>
        <span className="text-[#B6BCC8] text-[16px] font-bold leadding-[26px]">
          $250.00
        </span>
      </div>
      <div className="plusAndMinusCon flex items-center justify-between rounded-[10px] px-[24px] bg-[#F6F8FD] py-[18px]">
        <Image
          src={"/images/icon-minus.svg"}
          width={12}
          height={3}
          alt="minus icon"
        ></Image>
        <span className="text-[#1D2026] text-[16px] font-bold">0</span>
        <Image
          src={"/images/icon-plus.svg"}
          width={12}
          height={12}
          alt="plus icon"
        ></Image>
      </div>
    </div>
  );
}
