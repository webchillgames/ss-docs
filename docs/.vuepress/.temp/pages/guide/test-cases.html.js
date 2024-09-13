import comp from "/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/guide/test-cases.html.vue"
const data = JSON.parse("{\"path\":\"/guide/test-cases.html\",\"title\":\"Тест кейсы\",\"lang\":\"ru_RU\",\"frontmatter\":{\"lang\":\"ru_RU\",\"title\":\"Тест кейсы\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/test-cases.md\"}")
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
