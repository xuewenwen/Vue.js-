import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Nav from '@/components/Nav.vue'

Vue.config.productionTip = false
Vue.component('Nav',Nav)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
