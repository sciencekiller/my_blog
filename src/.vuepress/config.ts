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
  // Enable it with pwa
  // shouldPrefetch: false,
  //   theme: hopeTheme({
  //     plugins: {
  //       comment: {
  //         provider: "Giscus",
  //         comment: true,
  //         repo: "sciencekiller/my_blog",
  //         repoId: "R_kgDOI3dgAw",
  //         category: "Announcements",
  //         categoryId: "DIC_kwDOI3dgA84CVDY4",
  //       },
  //     },
  //   }),
  theme,
});
