import { atom } from "recoil";

const counting = atom({
  key: "counting",
  default: 0,
});

export { counting };
