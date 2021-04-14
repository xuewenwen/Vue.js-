import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Money from '@/views/Money.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Labels from '@/views/Labels.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Statistics from '@/views/Statistics.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Money
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  }

]

const router = new VueRouter({
  routes
})

export default router
