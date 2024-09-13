import React from "react";
import Image from "next/image";

export default function LargeHeader() {
  return (
    <div className=" parent hidden des:flex des:justify-between des:max-w-[1500px] des:mx-[auto] my-[0] des:border-b des:pb-[45px] des:border-b-grey des:mb-[90px]">
      <div className="logoTextCon flex gap-[60px] items-center">
        <Image
          src={"/images/logo.svg"}
          width={137.5}
          height={20}
          alt="logo icon"
        ></Image>
        <div className=" textCon flex  items-center gap-[32px]">
          <span className="largeheaderText">Collections</span>
          <span className="largeheaderText">Men</span>
          <span className="largeheaderText">Women</span>
          <span className="largeheaderText">About</span>
          <span className="largeheaderText">Contact</span>
        </div>
      </div>
      <div className="profilepicAndCartIconCon flex items-center gap-[46px]">
        <Image
          src={"/images/icon-cart.svg"}
          width={21.8}
          height={20}
          alt="cart icon"
        ></Image>
        <Image
          src={"/images/image-avatar.png"}
          width={50}
          height={50}
          alt="proffile pic"
        ></Image>
      </div>
    </div>
  );
}
