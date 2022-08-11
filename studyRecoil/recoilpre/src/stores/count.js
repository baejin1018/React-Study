import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const countTitleState = selector({
  key: "countTitleState",
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)} input값은 ${get(inputState)}`;
  },
  set: ({ set }, newValue) => {
    set(countState, Number(newValue));
    set(inputState, newValue + "");
  },
});
