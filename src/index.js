import UicButton from '../packages/button/index.js';
import UicProgress  from '../packages/progress/index.js';

const vmLibrary = [
  UicButton
]

const install = function ( Vue, opts = {} ) {
  if ( install.installed ) return
  
  vmLibrary.forEach(item => {
    Vue.component(item.name, item);
  })
  
  Vue.use(UicProgress);
}


if ( typeof window !== 'undefined' && window.Vue ) {
  install(window.Vue);
}

export default {
  version: '1.0.4',
  install,
  UicButton,
  UicProgress
}