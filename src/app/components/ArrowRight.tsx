import React from "react";
import Image from "next/image";
import useCount from "@/usestore/UseCount";
import popUp from "@/usestore/Popup";

export default function ArrowRight() {
  const picIndex = useCount();
  const popup = popUp();
  return (
    <div
      className={`w-[40px] h-[40px] rounded-[50%] bg-[#fff] absolute 
        top-[50%]
      ${
        popup.show ? "right-[-20px]" : "right-[6%]"
      } flex items-center justify-center `}
      onClick={() => picIndex.increment()}
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
