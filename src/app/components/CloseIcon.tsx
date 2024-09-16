import React from "react";
import Image from "next/image";
import popUp from "@/usestore/Popup";

export default function CloseIcon() {
  const show = popUp();
  return (
    <Image
      src={"images/icon-close.svg"}
      width={20}
      height={20}
      alt="close icon"
      className="absolute top-[-5%] right-[-5%]"
      onClick={() => show.setTrue()}
    ></Image>
  );
}
