import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "教程:",
        icon: "edit",
        prefix: "Course/",
        children: [
          { text: "更改开机图标", icon: "edit", link: "Change_boot_icon" },
        ],
      },
      {
        text: "下载:",
        icon: "edit",
        prefix: "Download/",
        children: [
          {
            text: "More_Tools_2",
            icon: "edit",
            link: "More_Tools_2",
          },
          {
            text: "More_Tools",
            icon: "edit",
            link: "More_Tools",
          },
          {
            text: "HackBGRT",
            icon: "edit",
            link: "HackBGRT"
          },
          {
            text: "DiskGenius",
            icon: "edit",
            link: "DiskGenius"
          },
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
