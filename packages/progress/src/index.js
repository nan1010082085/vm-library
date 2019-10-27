import Vue         from 'vue'
import UicProgress from './progress.vue'

const ProgressLoader = Vue.extend(UicProgress)

const Progress = ( options = {} ) => {
  if ( Vue.prototype.$isServer ) return;
  let instance = new ProgressLoader({
    el: document.createElement('div')
  })
  window.onload = () => {
    document.body.appendChild(instance.$el)
  }
  
  instance.start = () => {
    instance.type = 'start'
    instance.show = true
    instance.initAnimate()
  }
  
  instance.finish = () => {
    instance.type = 'finish'
    instance.show = true;
    instance.initAnimate()
    
    setTimeout(() => {
      instance.show = false
      instance.remove()
      
    }, instance.timer)
  }
  
  return instance
}

export default Progress();