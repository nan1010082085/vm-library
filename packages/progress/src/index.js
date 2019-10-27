import Vue         from 'vue'
import UicProgress from './progress.vue'

const defaultOptions = {
  color: '#297dff',
  height: '2.5',
  show: true,
  timer: 1000,
  maximum: 80
}

let dom = [];
let currentDefault = { ...defaultOptions }

function instance () {
  if ( !dom.length ) {
    const Progress = new (Vue.extend(UicProgress))({
      el: document.createElement('div')
    })
    document.body.appendChild(Progress.$el)
    dom.push(Progress)
  }
  return dom[ dom.length - 1 ]
}

function Progressies ( options = {} ) {
  const Progress = instance();
  //start max or min num
  if ( options.maximum ) {
    if ( isNaN(options.maximum) ) {
      throw (new Error('maximun is NaN'))
    }
  }
  
  options = {
    ...currentDefault,
    ...options,
    remove () {
      Progress.show = false
      
      if ( dom.length ) {
        document.body.removeChild(Progress.$el)
      }
    }
  }
  
  Object.assign(Progress, options)
  
  return Progress
}

const createdProps = options => Progressies({ ...options })
const Progress = new Progressies()
//静态参数
Progress.setDefaultOptions = options => {
  createdProps(options)
  
  return Progress
}

//显示
Progress.start = () => {
  Progress.type = 'start'
  Progress.show = true
  if ( !dom.length ) {
    document.body.appendChild(Progress.$el)
    dom.push(Progress)
    
  }
  
  Progress.initAnimate()
}
//消失 清空dom
Progress.finish = () => {
  Progress.type = 'finish'
  Progress.show = true;
  if ( !dom.length ) {
    document.body.appendChild(Progress.$el)
    dom.push(Progress)
  }
  Progress.initAnimate()
  
  setTimeout(() => {
    Progress.show = false
    
    dom.forEach(Progress => {
      Progress.remove()
    });
    dom = []
    
  }, Progress.timer)
}

export default Progress;