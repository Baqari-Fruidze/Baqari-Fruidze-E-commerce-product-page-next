import React from "react";
import Image from "next/image";

export default function ArrowRight() {
  return (
    <div className="w-[40px] h-[40px] rounded-[50%] bg-[#fff] absolute top-[50%] left-[6%] flex items-center justify-center ">
      <Image
        src={"/images/icon-previous.svg"}
        width={10}
        height={10}
        alt="arrow rigth"
      ></Image>
    </div>
  );
}
