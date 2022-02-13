import { createApp } from "vue";
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import VueAxios from "vue-axios";
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

axios.defaults.baseURL = 'http://localhost:3000/api'

const app = createApp(App)
app
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(VueAxios, axios)
  .provide('axios', app.config.globalProperties.axios)
  .mount("#app");
