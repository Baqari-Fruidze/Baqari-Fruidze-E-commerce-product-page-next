"use client";
import useCount from "@/usestore/UseCount";
import React from "react";
import Image from "next/image";

export default function Cart() {
  const usecount = useCount();
  const total = usecount.count * 125;
  return (
    <div className=" parent bg-[#fff] rounded-[10px] max-w-[485px] px-[24px] pt-[24px] pb-[32px] absolute top-[100px]  left-[8px] right-[7px] z-[99] mx-[auto] my-[0]">
      <h1 className="text-[16px] text-[#1D2026] font-bold pb-[27px] border-b border-[#E4E9F2]">
        Cart
      </h1>
      <div className="flex flex-col gap-[26px]">
        <div className="flex items-center justify-between">
          <Image
            src={"/images/image-product-1-thumbnail.jpg"}
            width={50}
            height={50}
            alt="product image"
            style={{ borderRadius: "10px" }}
          ></Image>
          <div className="flex flex-col">
            <p>Fall Limited Edition Sneakers</p>
            <div>
              <span>$125.00 x {usecount.count}</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
