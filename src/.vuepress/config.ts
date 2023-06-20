import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
// @ts-ignore
// @ts-ignore
export default defineUserConfig({
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
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
