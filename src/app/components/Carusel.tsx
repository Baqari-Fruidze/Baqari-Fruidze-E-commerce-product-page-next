"use client";
import React from "react";
import Image from "next/image";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";
import index from "@/usestore/PicIndex";

export default function Carusel() {
  const picArr = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];
  const picIndex = index();
  return (
    <>
      <div className="caruselParent h-[300px] w-full relative">
        <Image
          src={`${picArr[picIndex.num]}`}
          width={375}
          height={300}
          alt="image of pdocut"
          style={{ width: "100%", height: "100%" }}
        ></Image>
        <ArrowRight />
        <ArrowLeft />
      </div>
    </>
  );
}
