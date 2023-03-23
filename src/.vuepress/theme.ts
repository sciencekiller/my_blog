import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";

export default hopeTheme({

  hostname: "https://sciencekill.netlify.app",

  author: {
    name: "Sciencekill",
    url: "https://sciencekill.netlify.app",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://github.com/sciencekiller/",

  docsDir: "docs",

  blog: {
    medias: {
      Baidu: "",
      BiliBili: "",
      Bitbucket: "",
      Dingding: "",
      Discord: "",
      Dribbble: "",
      Email: "",
      Evernote: "",
      Facebook: "",
      Flipboard: "",
      Gitee: "",
      GitHub: "",
      Gitlab: "",
      Gmail: "",
      Instagram: "",
      Lark: "",
      Lines: "",
      Linkedin: "",
      Pinterest: "",
      Pocket: "",
      QQ: "",
      Qzone: "",
      Reddit: "",
      Rss: "",
      Steam: "",
      Twitter: "",
      Wechat: "",
      Weibo: "",
      Whatsapp: "",
      Youtube: "",
      Zhihu: "",
    },
  },

  locales: {

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "MIT Licence",

      displayFooter: true,

      blog: {
        description: "Sciencekill",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins:{
    comment: {
      provider: "Giscus",
      comment: true,
      repo: "sciencekiller/my_blog",
      repoId: "R_kgDOI3dgAw",
      category: "Announcements",
      categoryId: "DIC_kwDOI3dgA84CVDY4",
    },
    blog: true,
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({tag}) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: {type: "tip"},
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
