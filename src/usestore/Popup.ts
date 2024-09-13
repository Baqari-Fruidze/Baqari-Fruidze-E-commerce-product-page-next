import { create } from "zustand";
interface Ttype {
  show: boolean;
  setTrue: () => void;
}
const popUp = create<Ttype>((set) => ({
  show: false,
  setTrue: () =>
    set((state) => ({
      show: !state.show,
    })),
}));
export default popUp;
