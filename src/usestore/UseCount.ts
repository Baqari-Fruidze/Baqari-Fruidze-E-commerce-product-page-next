import { create } from "zustand";
interface Ttype {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementWith: (num: number) => void;
}
const useCount = create<Ttype>((set) => ({
  count: 0,
  increment: () =>
    set((state) => {
      if (state.count < 3) {
        return { count: state.count + 1 };
      }
      return state;
    }),
  incrementWith: (num) =>
    set((state) => ({
      count: (state.count = num),
    })),
  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    }),
}));

export default useCount;
