import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { commentPlugin } from "vuepress-plugin-comment2";
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
  plugins: [
    commentPlugin({
      provider: "Giscus",
      comment: true,
      repo: "sciencekiller/my_blog",
      repoId: "R_kgDOI3dgAw",
      category: "Announcements",
      categoryId: "DIC_kwDOI3dgA84CVDY4",
    }),
  ],
  theme,
});
