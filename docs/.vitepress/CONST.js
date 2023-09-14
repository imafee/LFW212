import pkg from "../../package.json";

const { freeze } = Object;

// 仓库信息
export let REPO = {
  NAME: "lfw212",
  AUTHOR: "imafee",
  EMAIL: "imafee@163.com",
  BRANCH: "main",
  HOST: "github.com",
  FILE: {},
};
REPO.URL = `https://${REPO.HOST}/${REPO.AUTHOR}/${REPO.NAME}`;
REPO.FILE.URL = `${REPO.URL}/blob/${REPO.BRANCH}/:path`;
REPO.FILE.EDIT_URL = `${REPO.URL}/edit/${REPO.BRANCH}/:path`;
// 部署平台信息
export let DEPLOY = { NAME: REPO.NAME, HOST: "github.io" };
DEPLOY.URL = `https://${REPO.NAME}.${DEPLOY.HOST}/${REPO.NAME}/`;
// 网站配置
export let SITE = {
  title: REPO.NAME,
  description:
    "Nodejs Application Development Course,LFW211,Linux Foundation,Training and Certification",
  base: `/${REPO.NAME}/`,
  sitemap: {
    hostname: REPO.URL,
  },
  search: {
    provider: "local",
  },
  footer: {
    message: `Released under the ${pkg.license} License.`,
    copyright: `Copyright © 2020-${new Date().getFullYear()}-${REPO.AUTHOR}`,
  },
  editLink: {
    pattern: REPO.FILE.EDIT_URL,
    text: `Edit this page on ${REPO.HOST}`,
  },
  lastUpdated: true,
  socialLinks: [{ icon: "github", link: REPO.URL }],
  nav: [{ text: "Home", link: "/" }],
  sidebar: [
    { text: "01.Course Introduction", link: "/intro/" },
    { text: "02.Setting Up", link: "/setting/" },
  ],
};

// export
const ALL = [REPO, DEPLOY, SITE];
ALL.forEach((key) => freeze(key));
export default freeze(ALL);
