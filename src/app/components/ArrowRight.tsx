import React from "react";
import Image from "next/image";
import index from "@/usestore/PicIndex";

export default function ArrowRight() {
  const picIndex = index();
  return (
    <div
      className="w-[40px] h-[40px] rounded-[50%] bg-[#fff] absolute top-[50%] right-[6%] flex items-center justify-center "
      onClick={() => picIndex.increase()}
    >
      <Image
        src={"/images/icon-next.svg"}
        width={10}
        height={10}
        alt="arrow rigth"
      ></Image>
    </div>
  );
}
