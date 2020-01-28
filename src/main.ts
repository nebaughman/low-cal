import Vue from 'vue'

Vue.config.productionTip = false

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
Vue.component("fa-icon", FontAwesomeIcon)

import { library } from "@fortawesome/fontawesome-svg-core"

//import { far } from "@fortawesome/free-regular-svg-icons"
//library.add(far)

//import { fas } from "@fortawesome/free-solid-svg-icons"
//library.add(fas)

// loading only needed icons
import {
  faCaretLeft, faCaretRight, faBackward, faForward, faCalendarDay,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faCaretLeft, faCaretRight, faBackward, faForward, faCalendarDay,
)

/*
import {
  ...,
} from "@fortawesome/free-regular-svg-icons"

library.add(
  ...,
)
*/

import Demo from './demo/Demo.vue'

new Vue({
  render: h => h(Demo),
}).$mount('#app')
