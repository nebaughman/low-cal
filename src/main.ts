import { createApp } from 'vue'
import Demo from "./demo/Demo.vue"
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import "./style.css"
import "./icons.ts"

createApp(Demo)
  //.component("fa-icon", FontAwesomeIcon)
  .mount('#app')
