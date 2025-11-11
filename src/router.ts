import { createWebHistory, createRouter } from 'vue-router'
import SvgToSvgConverter from './components/SvgToSvgConverter.vue'
import TheWelcome from './components/TheWelcome.vue'
import SteakHolder from './components/SteakHolder.vue'

const routes = [
  { path: '/', component: TheWelcome },
  { path: '/svg_converter', component: SvgToSvgConverter },
  { path: '/impressum', component: SteakHolder },

  // redirect to default route on unknown paths
  {path: '/:pathMatch(.*)*', redirect: '/'},
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})
