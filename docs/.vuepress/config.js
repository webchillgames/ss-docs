import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "ru-RU",

  title: "Эврика",
  description: "Документация",

  theme: defaultTheme({
    navbar: ["/", "/guide/introduction"],
    sidebar: [
      "/guide/introduction.md",
      "/guide/i-studio.md",
      "/guide/teacher-journal.md",
    ],
  }),

  bundler: viteBundler(),
});
