import React from "react";
import Image from "next/image";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

export default function Carusel() {
  return (
    <>
      <div className="caruselParent h-[300px] w-full relative">
        <Image
          src={"/images/image-product-1-thumbnail.jpg"}
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
