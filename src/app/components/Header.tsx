"use client";
import Image from "next/image";
import Burger from "./Burger";
import useBurgerShow from "@/usestore/BurgerShow";

export default function Header() {
  const burgerShow = useBurgerShow();
  return (
    <>
      <div className="Parent px-[24px] py-[24px] flex items-center justify-between relative max-w-[500px] mx-[auto] my-[0] des:hidden">
        <div className="iconsCon flex items-center gap-[16px]">
          <Image
            src={`/images/icon-menu.svg`}
            width={16}
            height={15}
            alt="burger icon"
            onClick={() => burgerShow.setTrue()}
          ></Image>
          <Image
            src={"/images/logo.svg"}
            width={137.5}
            height={20}
            alt="logo icon"
          ></Image>
        </div>
        <div className="iconsCon flex items-center gap-[16px]">
          <Image
            src={"/images/icon-cart.svg"}
            width={21.8}
            height={20}
            alt="cart icon"
          ></Image>
          <Image
            src={"/images/image-avatar.png"}
            width={24}
            height={24}
            alt="proffile pic"
          ></Image>
        </div>
      </div>
      {burgerShow.burgerShow ? <Burger /> : null}
    </>
  );
}
