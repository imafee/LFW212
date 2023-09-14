import { defineConfig } from "vitepress";
import { REPO, SITE } from "./CONST.js";
const {
  title,
  description,
  nav,
  sidebar,
  base,
  footer,
  editLink,
  lastUpdated,
  search,
  socialLinks,
} = SITE;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  base,
  cleanUrls: true,
  themeConfig: {
    nav,
    socialLinks,
    sidebar,
    footer, // 开启sidebar时此项消失
    editLink,
    lastUpdated,
    search,
  },
});
