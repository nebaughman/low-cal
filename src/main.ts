import Vue from 'vue'

Vue.config.productionTip = false

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
Vue.component("fa-icon", FontAwesomeIcon)

import { library } from "@fortawesome/fontawesome-svg-core"
//import { far } from "@fortawesome/free-regular-svg-icons"
//import { fas } from "@fortawesome/free-solid-svg-icons"
//library.add(far)
//library.add(fas)

// loading only needed icons
import {
  faCaretLeft, faCaretRight, faBackward, faForward,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faCaretLeft, faCaretRight, faBackward, faForward,
)

/*
import {
  ...,
} from "@fortawesome/free-regular-svg-icons"

library.add(
  ...,
)
*/

import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
