import comp from "/Users/nana/Documents/web.chill.games/ss-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Главная\",\"lang\":\"ru-RU\",\"frontmatter\":{\"home\":true,\"title\":\"Главная\",\"actions\":[{\"text\":\"Руководство\",\"link\":\"/guide/introduction.md\",\"type\":\"primary\"},{\"text\":\"Я-студия\",\"link\":\"/guide/i-studio.md\",\"type\":\"secondary\"},{\"text\":\"Журнал учителя\",\"link\":\"/guide/teacher-journal.md\",\"type\":\"secondary\"},{\"text\":\"Тест кейсы\",\"link\":\"/tests/test-cases.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Инструкции\",\"details\":\"Подробные объяснения шагов для достижения результатов.\"},{\"title\":\"Тест кейсы\",\"details\":\"Для тестирования системы в будущем.\"}],\"footer\":\"2024 | Эврика\"},\"headers\":[],\"git\":{\"updatedTime\":1725911018000,\"contributors\":[{\"name\":\"webchillgames\",\"email\":\"web.chill.games@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
