import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  lang: "en-US",
  title: "Such Dev Blog",
  description: "Much code, very webdev.",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        size: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image.png",
        href: "/favicon-32x32.png",
        size: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image.png",
        href: "/favicon-16x16.png",
        size: "16x16",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "stylesheet", href: "/styles/index.css" }],
    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://suchdevblog.com/" }],
    ["meta", { property: "og:title", content: "Such Dev Blog" }],
    ["meta", { property: "og:description", content: "Much code, very webdev. A blog by Samuel Faure about web development, Ruby on Rails, Node.js, and more." }],
    ["meta", { property: "og:image", content: "https://suchdevblog.com/images/devpic.webp" }],
    // Twitter
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:url", content: "https://suchdevblog.com/" }],
    ["meta", { name: "twitter:title", content: "Such Dev Blog" }],
    ["meta", { name: "twitter:description", content: "Much code, very webdev. A blog by Samuel Faure about web development, Ruby on Rails, Node.js, and more." }],
    ["meta", { name: "twitter:image", content: "https://suchdevblog.com/images/devpic.webp" }],
    // SEO Meta
    ["meta", { name: "author", content: "Samuel Faure" }],
    ["meta", { name: "keywords", content: "web development, Ruby on Rails, Node.js, fullstack, developer, blog, tutorials, programming" }],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    [
      "script",
      {
        "data-goatcounter": "https://suchdevblog.goatcounter.com/count",
        async: true,
        src: "https://gc.zgo.at/count.js",
      },
    ],
  ],
  theme: defaultTheme({
    navbar: [
      { text: "Who am I ?", link: "/WhoAmI" },
      { text: "Portfolio", link: "/Portfolio" },
      { text: "Resources", link: "/resources" },
      { text: "Lessons", link: "/lessons" },
      { text: "Opinions", link: "/opinions" },
      { text: "Tutorials", link: "/tutorials" },
    ],
    sidebarDepth: 1,
    sidebar: [
      "/WhoAmI",
      "/Portfolio",
      {
        text: "Resources",
        children: [
          "/resources/BeginnersResources",
          "/resources/IntermediateResources",
          "/resources/SeniorResources",
          "/resources/DesignResources",
          "/resources/LLMResources",
        ],
      },
      {
        text: "Lessons",
        children: [
          "/lessons/ProductivityAndWellBeing.md",
          "/lessons/AtomicGitCommits.md",
          "/lessons/HowToLearnGit.md",
          "/lessons/HowToStartCSS.md",
          "/lessons/HowToNotUseYourBrain.md",
          "/lessons/ExplainingRubySingletonClass.md",
        ],
      },
      {
        text: "Opinions",
        children: [
          "/opinions/TechnicalDebtKitchen",
          "/opinions/WhyOurWorkCultureSucks",
          "/opinions/MarieKondo",
          "/opinions/WhatOpenSourceIs",
          "/opinions/WhyDiversityIsGreat",
          "/opinions/NetworkingIsNotWhatYouThink",
        ],
      },
      {
        text: "Tutorials",
        children: [
          "/tutorials/BuildYourOwnSystem",
          "/tutorials/TestingAnsibleScriptsWithVagrant",
          "/tutorials/UploadFilesFromVueToRails",
          "/tutorials/FilterAnythingInRails",
          "/tutorials/TestAllYourRoutesInRails.md",
          "/tutorials/HowToUseSolrWithRails",
          "/tutorials/DebuggingSolrSunspot",
        ],
      },
    ],
  }),
});
