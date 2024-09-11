import { create } from "zustand";

interface Ttype {
  num: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create<Ttype>((set) => ({
  num: 0,
  increase: () =>
    set((state) => {
      if (state.num < 3) {
        return { num: state.num + 1 };
      }
      return state;
    }),
  decrease: () =>
    set((state) => {
      if (state.num > 0) {
        return { num: state.num - 1 };
      }
      return state;
    }),
}));

export default useStore;
