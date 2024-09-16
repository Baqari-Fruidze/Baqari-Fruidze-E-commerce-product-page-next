"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import popUp from "@/usestore/Popup";
import useCount from "@/usestore/UseCount";

export default function LargeCarusel({
  children,
}: {
  show: boolean;
  children: ReactNode;
}) {
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
  console.log(picindex.count);
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
          <Image
            src={`${item}`}
            width={88}
            height={88}
            alt="product pic"
            key={index}
            style={{ borderRadius: "10px" }}
            onClick={() => picindex.incrementWith(index)}
          ></Image>
        ))}
      </div>
    </div>
  );
}
