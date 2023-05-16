import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons
import mdiVue from "mdi-vue/v3";
import * as mdijs from '@mdi/js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Filters
import filters from '@/helpers/filters.js'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store)
app.use(mdiVue, { icons: mdijs })
app.config.globalProperties.$filters = filters

app.mount('#app')
