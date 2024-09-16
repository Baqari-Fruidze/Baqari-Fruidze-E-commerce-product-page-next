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
        top-[50%]
      ${
        popup.show ? "right-[-20px]" : "right-[6%]"
      } flex items-center justify-center `}
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
