import './assets/reset.css'
import './assets/rem'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Col, Row, Icon, Field, Tab, Tabs } from 'vant'

Vue.use(Button).use(Col).use(Row).use(Icon).use(Field).use(Tab).use(Tabs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
