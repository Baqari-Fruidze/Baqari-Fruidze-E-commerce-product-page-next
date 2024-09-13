"use client";
import React from "react";
import Image from "next/image";
import caruselIndex from "@/usestore/LargeCaruselIndex";
import popUp from "@/usestore/Popup";

export default function LargeCarusel() {
  const picindex = caruselIndex();
  const popup = popUp();
  const picArr = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  return (
    <div className=" hiden des:flex des:flex-col des:gap-[32px]">
      <div className="picCon">
        <Image
          src={`${picArr[picindex.count]}`}
          width={445}
          height={445}
          alt="product image"
          style={{
            borderRadius: "15px",
            position: popup.show ? "absolute" : "static",
            top: popup.show ? "250px" : "static",
            right: popup.show ? "45%" : "static",
          }}
          onClick={() => popup.setTrue()}
        ></Image>
      </div>
      <div className=" des:flex des:gap-[31px] des:items-center">
        {picArr.map((item, index) => (
          <Image
            src={`${item}`}
            width={88}
            height={88}
            alt="product pic"
            key={index}
            style={{ borderRadius: "10px" }}
          ></Image>
        ))}
      </div>
    </div>
  );
}
