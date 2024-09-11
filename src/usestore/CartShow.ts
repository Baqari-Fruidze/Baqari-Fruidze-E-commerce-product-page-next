import { create } from "zustand";
interface Ttype {
  cartShow: boolean;
  setTrue: () => void;
}
const useCartShow = create<Ttype>((set) => ({
  cartShow: false,
  setTrue: () =>
    set((state) => ({
      cartShow: !state.cartShow,
    })),
}));
export default useCartShow;
