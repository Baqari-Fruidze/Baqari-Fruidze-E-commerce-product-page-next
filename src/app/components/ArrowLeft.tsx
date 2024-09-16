"use client";
import React from "react";
import Image from "next/image";
import useStore from "@/usestore/PicIndex";
import popUp from "@/usestore/Popup";

export default function ArrowRight() {
  const picIndex = useStore();
  const popup = popUp();
  return (
    <div
      className={`w-[40px] h-[40px] rounded-[50%] bg-[#fff] absolute
         top-[50%]  ${
           popup.show ? "left-[-4%]" : "left-[6%]"
         } flex items-center justify-center `}
      onClick={() => picIndex.decrease()}
    >
      <Image
        src={"/images/icon-previous.svg"}
        width={10}
        height={10}
        alt="arrow left"
      ></Image>
    </div>
  );
}
