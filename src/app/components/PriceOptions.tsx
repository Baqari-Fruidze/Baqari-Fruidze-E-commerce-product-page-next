"use client";
import React from "react";
import Image from "next/image";
import useCount from "@/usestore/UseCount";

export default function PriceOptions() {
  const usecount = useCount();
  return (
    <div className="parent flex flex-col">
      <div className="mb-[16px]">
        <div className="PriceCon flex justify-between items-center mb-[26px] des:flex-col des:items-start des:mb-[32px]">
          <div className="flex items-center gap-[16px]">
            <span className="text-[#1D2026] text-[28px] font-bold">
              $125.00
            </span>
            <div className="w-[51px] h-[27px] bg-[#FFEEE2] rounded-[6px] flex items-center justify-center">
              50%
            </div>
          </div>
          <span className="text-[#B6BCC8] text-[16px] font-bold leadding-[26px]">
            $250.00
          </span>
        </div>
        <div className="addTocartAndPriceoptionCon flex flex-col gap-[16px] des:flex-row">
          <div className="plusAndMinusCon flex items-center justify-between rounded-[10px] px-[24px] bg-[#F6F8FD] py-[18px] des:w-[40%] ">
            <Image
              src={"/images/icon-minus.svg"}
              width={12}
              height={3}
              alt="minus icon"
              onClick={() => usecount.decrement()}
            ></Image>
            <span className="text-[#1D2026] text-[16px] font-bold">
              {usecount.count}
            </span>
            <Image
              src={"/images/icon-plus.svg"}
              width={12}
              height={12}
              alt="plus icon"
              onClick={() => usecount.increment()}
            ></Image>
          </div>
          <div className="AddToCartCon bg-[#FF7E1B] [box-shadow:0px_20px_50px_-20px_#FF7E1B] rounded-[10px] py-[20px] flex justify-center items-center des:w-[60%]">
            <Image
              src={"/images/icon-cart.svg"}
              height={16}
              width={17.4}
              alt="cartIcon"
            ></Image>
            <span className="text-[16px] text-[#fff] font-bold ml-[15px]">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
