import { selector } from "recoil";

export const recoilStartCountState = selector({
  key: "recoilStartCountState",
  get: async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebookexperimental/Recoil"
    );
    const recoilProjectInfo = await response.json();
    return recoilProjectInfo["stargazers_count"];
  },
});
