import UICProgress from './src/index'

export default {
  install ( Vue ) {
    Vue.use(UICProgress)
    Vue.prototype.$progress = UICProgress;
  },
  start: () => UICProgress.start(),
  finish: () => UICProgress.finish()
}