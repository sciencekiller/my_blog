import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Sciencekill的博客",
      description: "Sciencekill的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
