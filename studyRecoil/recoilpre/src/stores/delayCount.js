import { atom, selector } from "recoil";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const delayCountState = atom({
  key: "delayCountState",
  default: 0,
});

export const delay1sSelctor = selector({
  key: "delay1sSelctor",
  get: async ({ get }) => {
    const result = `delayCountState는 ${get(delayCountState)}입니다`;
    await delay(1000);
    return result;
  },
});
