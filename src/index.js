import UicButton from '../packages/button/index.js';
import Progress  from '../packages/progress/index.js';

const vmLibrary = [
  UicButton
]

const install = function ( Vue ) {
  if (install.installed) return
  
  Vue.use(Progress);
  
  vmLibrary.forEach(item => {
    Vue.component(item.name, item);
  })
}


if ( typeof window !== 'undefined' && window.Vue ) {
  install(window.Vue)
}


export default {
  version: '1.0.1',
  install,
  UicButton,
  Progress
}

export {
  UicButton,
  Progress
}