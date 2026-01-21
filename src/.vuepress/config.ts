import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/hoyo_blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Hoyo's Blog",
      description: "Hoyo的个人博客",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Hoyo的博客",
      description: "Hoyo的个人博客 - 分享技术与生活",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
