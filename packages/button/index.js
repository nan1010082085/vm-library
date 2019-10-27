import UICButton from './src/button.vue';

const UicButton = UICButton

UicButton.install = ( Vue ) => {
  Vue.component(UicButton.name, UicButton)
}

export default UicButton