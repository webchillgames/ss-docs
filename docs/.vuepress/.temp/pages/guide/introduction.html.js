import comp from "/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/guide/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/guide/introduction.html\",\"title\":\"Руководство\",\"lang\":\"ru_RU\",\"frontmatter\":{\"lang\":\"ru_RU\",\"title\":\"Руководство\"},\"headers\":[],\"git\":{\"updatedTime\":1725911018000,\"contributors\":[{\"name\":\"webchillgames\",\"email\":\"web.chill.games@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"guide/introduction.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
