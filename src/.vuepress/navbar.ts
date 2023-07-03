import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Blogs",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "教程",
        icon: "pen-to-square",
        prefix: "Course/",
        children: [
          {text:"更改开机图标",icon:"pen-to-square",link:"Change_boot_icon"},
        ],
      },
      {
        text: "算法",
        icon: "pen-to-square",
        prefix: "Algorithm/",
        children: [
          {text:"最短路算法",icon:"pen-to-square",link:"Shortest_path_algorithm"},
          {text:"并查集",icon:"pen-to-square",link:"Union_find_algorithm"},
        ],
      },
      {
        text: "下载",
        icon: "pen-to-square",
        prefix: "Download/",
        children: [
          {text:"DiskGenius",icon:"pen-to-square",link:"DiskGenius"},
          {text:"HackBGRT",icon:"pen-to-square",link:"HackBGRT"},
          {text:"Sciencekill's Toolkit",icon:"pen-to-square",link:"Sciencekills_toolkit"},
        ],
      },
    ],
  },
]);
