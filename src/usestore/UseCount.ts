import { create } from "zustand";
interface Ttype {
  count: number;
  increment: () => void;
  decrement: () => void;
}
const useCount = create<Ttype>((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
}));

export default useCount;
