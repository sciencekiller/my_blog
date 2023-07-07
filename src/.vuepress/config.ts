import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Sciencekill's Blog",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
