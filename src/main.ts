import { createApp } from "vue";
import BootstrapVue3 from 'bootstrap-vue-3'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

library.add(faSearch, faComment)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .mount("#app");
