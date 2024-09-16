"use client";
import React from "react";
import Image from "next/image";
import useCount from "@/usestore/UseCount";
import popUp from "@/usestore/Popup";

export default function ArrowRight() {
  const picIndex = useCount();
  const popup = popUp();
  console.log(picIndex.count);
  return (
    <div
      className={`w-[40px] h-[40px] rounded-[50%] bg-[#fff] absolute
         top-[50%]  ${
           popup.show ? "left-[-4%]" : "left-[6%]"
         } flex items-center justify-center `}
      onClick={() => picIndex.decrement()}
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
