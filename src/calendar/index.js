import calendar from './src/calendar.vue'

const Calendar = calendar;

Calendar.install = ( Vue ) => {
  Vue.component(Calendar.name, Calendar)
}

export default Calendar