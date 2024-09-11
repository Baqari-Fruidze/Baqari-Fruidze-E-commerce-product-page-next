"use client";
import useCount from "@/usestore/UseCount";
import React from "react";
import Image from "next/image";

export default function Cart() {
  const usecount = useCount();
  const total = usecount.count * 125;
  return (
    <div className=" parent bg-[#fff] min-h-[256px] rounded-[10px] max-w-[485px] px-[24px] pt-[24px] pb-[22px] absolute top-[100px]  left-[8px] right-[7px] z-[99] mx-[auto] my-[0]">
      <h1 className="text-[16px] text-[#1D2026] font-bold pb-[27px] border-b border-[#E4E9F2]">
        Cart
      </h1>
      {usecount.count === 0 ? (
        <p className="text-center mt-[70px] text-[#69707D] text-[16px] font-bold leading-[26px]">
          {" "}
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-col gap-[26px] pt-[24px]">
          <div className="flex items-center justify-between">
            <Image
              src={"/images/image-product-1-thumbnail.jpg"}
              width={50}
              height={50}
              alt="product image"
              style={{ borderRadius: "10px" }}
            ></Image>
            <div className="flex flex-col">
              <p className="text-[#69707D] text-[16px] font-medium leading-[26px]">
                Fall Limited Edition Sneakers
              </p>
              <div>
                <span className="text-[#69707D] text-[16px] font-medium leading-[26px]">
                  $125.00 x
                  <span className="text-[#69707D] text-[16px] font-medium leading-[26px] ml-[5px] mr-[5px]">
                    {usecount.count}
                  </span>
                </span>
                <span className="text-[#1D2026] text-[16px] font-bold leading-[26px]">
                  ${total}
                </span>
              </div>
            </div>
            <Image
              src={"/images/icon-delete.svg"}
              width={14}
              height={16}
              alt="delete icon"
            ></Image>
          </div>
          <button className="py-[16px] rounded-[10px] bg-[#FF7E1B] text-[#fff] text-[16px] font-bold">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
