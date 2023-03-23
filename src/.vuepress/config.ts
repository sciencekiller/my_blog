import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Sciencekill的博客",
      description: "Sciencekill的博客",
    },
  },
  theme,
});
