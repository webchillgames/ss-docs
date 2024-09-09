export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Главная"} }],
  ["/guide/i-studio.html", { loader: () => import(/* webpackChunkName: "guide_i-studio.html" */"/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/guide/i-studio.html.js"), meta: {"title":"Я-студия"} }],
  ["/guide/introduction.html", { loader: () => import(/* webpackChunkName: "guide_introduction.html" */"/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/guide/introduction.html.js"), meta: {"title":"Руководство"} }],
  ["/guide/teacher-journal.html", { loader: () => import(/* webpackChunkName: "guide_teacher-journal.html" */"/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/guide/teacher-journal.html.js"), meta: {"title":"Журнал учителя"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
