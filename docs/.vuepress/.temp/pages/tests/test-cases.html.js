import comp from "/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/tests/test-cases.html.vue"
const data = JSON.parse("{\"path\":\"/tests/test-cases.html\",\"title\":\"Тест кейсы\",\"lang\":\"ru_RU\",\"frontmatter\":{\"lang\":\"ru_RU\",\"title\":\"Тест кейсы\"},\"headers\":[{\"level\":2,\"title\":\"Журнал учителя\",\"slug\":\"журнал-учителя\",\"link\":\"#журнал-учителя\",\"children\":[{\"level\":3,\"title\":\"Оценочные листы\",\"slug\":\"оценочные-листы\",\"link\":\"#оценочные-листы\",\"children\":[]}]},{\"level\":2,\"title\":\"Мастерские\",\"slug\":\"мастерские\",\"link\":\"#мастерские\",\"children\":[]},{\"level\":2,\"title\":\"Отчёты\",\"slug\":\"отчеты\",\"link\":\"#отчеты\",\"children\":[]},{\"level\":2,\"title\":\"Я-студия\",\"slug\":\"я-студия\",\"link\":\"#я-студия\",\"children\":[]}],\"git\":{\"updatedTime\":1726491471000,\"contributors\":[{\"name\":\"webchillgames\",\"email\":\"web.chill.games@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"tests/test-cases.md\"}")
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
