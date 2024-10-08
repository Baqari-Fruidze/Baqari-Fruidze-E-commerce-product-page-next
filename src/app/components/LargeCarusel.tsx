"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import popUp from "@/usestore/Popup";
import useCount from "@/usestore/UseCount";

export default function LargeCarusel({ children }: { children: ReactNode }) {
  const picindex = useCount();
  const popup = popUp();
  const picArr = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const firstChild = React.Children.toArray(children)[0];
  const secondChild = React.Children.toArray(children)[1];
  const thirdChild = React.Children.toArray(children)[2];

  return (
    <div className=" hidden des:flex des:flex-col des:gap-[32px]">
      <div className={`picCon ${popup.show ? "relative" : "static"} `}>
        <Image
          src={`${picArr[picindex.count]}`}
          width={`${popup.show ? "550" : "445"}`}
          height={`${popup.show ? "550" : "445"}`}
          alt="product image"
          onClick={() => popup.setTrue()}
          style={{ borderRadius: "15px" }}
        ></Image>
        {firstChild}
        {secondChild}
        {thirdChild}
      </div>
      <div className={`des:flex des:gap-[31px] des:items-center `}>
        {picArr.map((item, index) => (
          <div
            key={index}
            className={`w-[88px] h-[88px] rounded-[10px] relative hover:before:content-[' '] hover:before:absolute hover:before:inset-0 hover:before:bg-custom-gradient hover:before:bg-cover hover:before:bg-center hover:before:bg-no-repeat hover:before:w-[88px] hover:before:h-[88px] ${
              picindex.count === index
                ? 'before:content-[" "] before:absolute before:inset-0 before:bg-custom-gradient before:bg-cover before:bg-center before:bg-no-repeat before:w-[88px] before:h-[88px]'
                : ""
            }`}
          >
            <Image
              src={`${item}`}
              width={88}
              height={88}
              alt="product pic"
              key={index}
              style={{ borderRadius: "10px" }}
              onClick={() => picindex.incrementWith(index)}
              className={`${
                picindex.count === index
                  ? "border-[2px] border-[solid] border-[#FF7E1B]"
                  : null
              }`}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
