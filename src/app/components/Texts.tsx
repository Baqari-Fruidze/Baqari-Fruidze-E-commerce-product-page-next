import React from "react";

export default function Texts() {
  return (
    <div className=" parent  flex flex-col gap-[18px] des:gap-[30px]">
      <span className="text-[#FF7E1B] text-[12px] font-bold tracking-[1.846px] des:text-[13px]">
        Sneaker Company
      </span>
      <h1 className="text-[#1D2026] text-[28px] font-bold leading-[32px] des:text-[44px]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[15px] text-[#69707D] font-light leading-[25px] des:text-[16px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </div>
  );
}
