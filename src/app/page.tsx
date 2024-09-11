import Carusel from "./components/Carusel";
import PriceOptions from "./components/PriceOptions";
import Texts from "./components/Texts";

export default function Home() {
  return (
    <div className=" parent flex flex-col gap-[24px]">
      <Carusel />
      <div className=" infoCon px-[24px] pb-[88px]">
        <Texts />
        <PriceOptions />
      </div>
    </div>
  );
}
