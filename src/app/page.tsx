import Carusel from "./components/Carusel";
import LargeCarusel from "./components/LargeCarusel";
import PriceOptions from "./components/PriceOptions";
import Texts from "./components/Texts";

export default function Home() {
  return (
    <div className=" parent flex flex-col gap-[24px] max-w-[500px] mx-[auto] my-[0] relative">
      <Carusel />
      <LargeCarusel />
      <div className=" infoCon px-[24px] pb-[88px]">
        <Texts />
        <PriceOptions />
      </div>
    </div>
  );
}
